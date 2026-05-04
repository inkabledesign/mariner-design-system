import type { GradientConfig } from './index.types';
import gradientConfigs from './gradient-configs.json';

/**
 * Preset gradient configurations
 * Import and use these for consistent gradient styles across the app
 */

export const GRADIENT_PRESETS = {
  default: gradientConfigs.default as GradientConfig,
  blue: gradientConfigs.blue as GradientConfig,
  gold: gradientConfigs.gold as GradientConfig,
  purple: gradientConfigs.purple as GradientConfig,
  green: gradientConfigs.green as GradientConfig,
};

export type GradientPreset = keyof typeof GRADIENT_PRESETS;

/**
 * Get a gradient preset by name
 */
export const getGradientPreset = (preset: GradientPreset): GradientConfig => {
  return GRADIENT_PRESETS[preset];
};
