/* icon‑gen.js (Node ≥18, CommonJS) */
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

/* ---------- helpers ---------- */

// eslint-disable-next-line no-undef
const svgRoot = path.join(__dirname, 'src'); // Updated for src subfolder structure

/** dash‑case → camelCase */
const toCamel = s =>
  s
    .split('-')
    .map((p, i) => (i ? p.charAt(0).toUpperCase() + p.slice(1) : p))
    .join('');

/** “NavMarina” → “nav_marina” */
const toCategoryKey = folder => folder.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();

/** “NavMarina” → “NavMarina” → `NavMarinaIconName` */
const toTypeName = folder => `${folder.charAt(0).toUpperCase()}${folder.slice(1)}IconName`;

/* ---------- 2. collect every .svg (recursively) ---------- */

const categories = {}; // { nav_marina: { folder: 'NavMarina', files:[{abs, name}]} }

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(ent => {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) return walk(abs);
    if (!ent.isFile() || !ent.name.toLowerCase().endsWith('.svg')) return;

    const rel = path.relative(svgRoot, abs); // e.g. Nav/ico-close.svg
    const [folder, name] = rel.split(path.sep); // 'Nav'
    const key = toCategoryKey(folder); // 'nav'

    categories[key] ??= { folder, files: [] };
    categories[key].files.push({ abs, name });
  });
}

walk(svgRoot);

/* ---------- 3. normalise SVG fill ---------- */

const FILL_TAGS = 'path, circle, rect, polygon, polyline, ellipse';

Object.values(categories).forEach(cat =>
  cat.files.forEach(({ abs, name }) => {
    const $ = cheerio.load(fs.readFileSync(abs, 'utf8'), { xmlMode: true });
    let dirty = false;
    $(FILL_TAGS).each((_, el) => {
      if ($(el).attr('fill') !== 'currentColor') {
        $(el).attr('fill', 'currentColor');
        dirty = true;
      }
    });
    if (dirty) {
      fs.writeFileSync(abs, $.xml(), 'utf8');
      console.log(`🔧  ${cat.folder}/${name} → fill="currentColor"`);
    }
  })
);

/* ---------- 5. generate iconMap.ts ---------- */

const importLines = [];
const mapLines = [];

const sortedCategoryKeys = Object.keys(categories).sort((a, b) =>
  categories[a].folder.localeCompare(categories[b].folder)
);

sortedCategoryKeys.forEach(key => {
  const { folder, files } = categories[key];

  importLines.push(`// ${folder} svg`);
  files
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(({ name }) => {
      const id = toCamel(name.replace('.svg', ''));
      importLines.push(`import ${id} from './${folder}/${name}';`);
    });
  importLines.push('');

  mapLines.push(`  ${key}: {`);
  files
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(({ name }) => {
      const id = toCamel(name.replace('.svg', ''));
      mapLines.push(`    '${name.replace('.svg', '')}': ${id},`);
    });
  mapLines.push('  },');
});

importLines.push(`import { IconMap } from '../icons.type';\n`);

const iconMapOut = `
${importLines.join('\n')}
export const iconMap: IconMap = {
${mapLines.join('\n')}
};
`.trimStart();

fs.writeFileSync(path.join(svgRoot, 'iconMap.ts'), iconMapOut, 'utf8');

/* ---------- 6. generate / update iconsvg.type.ts ---------- */

const typeBlocks = [];
const nameByTypeLines = ['export interface IconNameByType {'];

sortedCategoryKeys.forEach(key => {
  const { folder, files } = categories[key];
  const tName = toTypeName(folder);
  const union = files
    .map(f => `'${f.name.replace('.svg', '')}'`)
    .sort()
    .join(' | ');
  typeBlocks.push(`export type ${tName} = ${union};\n`);
  nameByTypeLines.push(`  ${key}: ${tName};`);
});
nameByTypeLines.push('}');

const iconCategoryUnion = sortedCategoryKeys.map(k => `'${k}'`).join(' | ');

const iconNameUnion = sortedCategoryKeys.map(k => toTypeName(categories[k].folder)).join(' | ');

const iconTypeUnion = sortedCategoryKeys
  .map(k => `{ iconType: '${k}'; iconName: ${toTypeName(categories[k].folder)} }`)
  .join(' | ');

const iconMapGeneric = `
export type IconMap = {
  [K in IconCategoryType]: {
    [N in IconNameByType[K]]: React.FC<SvgProps>;
  };
};
`.trim();

const generatedTypes = `
// AUTO-GENERATED-ICONS: DO NOT EDIT BELOW
import { SvgProps } from 'react-native-svg';

export type IconCategoryType =
  | ${iconCategoryUnion};

${typeBlocks.join('\n')}

export type IconName =
  | ${iconNameUnion};

export type IconType =
  | ${iconTypeUnion};

${nameByTypeLines.join('\n')}

${iconMapGeneric}
`.trim();

// eslint-disable-next-line no-undef
const typesPath = path.join(__dirname, 'icons.type.ts');
const marker = '// AUTO-GENERATED-ICONS: DO NOT EDIT BELOW';
let existing = fs.existsSync(typesPath) ? fs.readFileSync(typesPath, 'utf8') : '';

existing = existing.replace(new RegExp(`${marker}[\\s\\S]*$`), '').trimEnd();
fs.writeFileSync(typesPath, `${existing}\n\n${generatedTypes}\n`, 'utf8');

/* ---------- 7. done ---------- */
console.log('🎉  iconMap.ts & icons.type.ts generated!');
