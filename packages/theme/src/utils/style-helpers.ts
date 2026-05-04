import { color } from '../';

export function getColorFromClass(
  colorClass: string,
  themeMode: 'light' | 'dark' = 'light'
): string {
  const match = colorClass.match(/text-([a-z]+)-([a-z]+)-?(\d+)?/);
  if (!match) return '#000';

  const [, category, name, variant] = match;
  const theme = color[themeMode];

  try {
    if (category === 'solid') {
      return theme.solid[name as keyof typeof theme.solid] || '#000';
    }
    if (category === 'brand' || category === 'material') {
      const cat = theme[category as 'brand' | 'material'];
      const val = cat[name as keyof typeof cat];
      if (val && typeof val === 'object') {
        return (val as Record<string, string>)[variant || '100'] || '#000';
      }
      return (val as string) || '#000';
    }
    if (category === 'system') {
      const val = theme.system[name as keyof typeof theme.system];
      if (val && typeof val === 'object') {
        return (val as Record<string, string>)[variant || '100'] || '#000';
      }
      return (val as string) || '#000';
    }
  } catch {}

  return '#000';
}
