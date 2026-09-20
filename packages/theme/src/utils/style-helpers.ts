import { color } from '../colors';

export function getColorFromClass(
  colorClass: string,
  themeMode: 'light' | 'dark' = 'light'
): string {
  // `colorClass` may hold several tokens (e.g. "text-material-surface-100
  // dark:text-material-surface-0"). In dark mode a `dark:` token takes
  // precedence and resolves against the light palette — matching NativeWind,
  // where `dark:` variants emit the static (light) color behind a dark-mode
  // selector. Base `text-` tokens resolve against the active palette.
  const tokens = colorClass.split(/\s+/);
  const baseToken = tokens.find(token => token.startsWith('text-'));
  const darkToken = tokens.find(token => token.startsWith('dark:text-'));

  const useDarkOverride = themeMode === 'dark' && darkToken !== undefined;
  const activeToken = useDarkOverride ? darkToken.slice(5) : baseToken;
  const theme = useDarkOverride ? color.light : color[themeMode];

  const match = activeToken?.match(/^text-(solid|brand|material|system|text)-(.+)$/);
  if (!match) return '#000';

  const [, category, remainder] = match;
  const segments = remainder.split('-');
  const lastSegment = segments[segments.length - 1];
  const variant = /^\d+$/.test(lastSegment) ? segments.pop() : undefined;
  const name = segments
    .join('-')
    .replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());

  try {
    if (category === 'solid' || category === 'text') {
      const values = theme[category];
      return values[name as keyof typeof values] || '#000';
    }
    if (category === 'brand' || category === 'material') {
      const cat = theme[category as 'brand' | 'material'];
      const val = cat[name as keyof typeof cat];
      if (val && typeof val === 'object') {
        return (val as unknown as Record<string, string>)[variant || '100'] || '#000';
      }
      return (val as string) || '#000';
    }
    if (category === 'system') {
      const val = theme.system[name as keyof typeof theme.system];
      if (val && typeof val === 'object') {
        return (val as unknown as Record<string, string>)[variant || '100'] || '#000';
      }
      return (val as string) || '#000';
    }
  } catch {}

  return '#000';
}
