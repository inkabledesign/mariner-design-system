// Icon exports for @mariner/assets package

// Export the generated icon map and types
export { iconMap } from './src/iconMap';
export type { IconMap, IconCategoryType, IconName } from './icons.type';

// Re-export specific icon categories for convenience
export type {
  InputIconName,
  MapIconName,
  MarinaIconName,
  MediaIconName,
  NavIconName,
  NavMarinaIconName,
  RadioIconName,
  SocialIconName,
  SystemIconName,
  UIIconName,
  WeatherIconName
} from './icons.type';
