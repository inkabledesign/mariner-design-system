import type { ColorPalette } from './types';

/**
 * Design System Color Tokens
 * 
 * This file contains all color definitions for the Mariner design system.
 * Edit these values and see changes instantly with hot reload!
 * 
 * Structure:
 * - light: Light mode colors
 * - dark: Dark mode colors
 * 
 * Each mode contains:
 * - brand: Primary, secondary, accent brand colors
 * - material: Surface and alpha dark colors
 * - solid: Solid color values
 * - system: Error, success, warning colors
 */
export const colorsData: ColorPalette = {
  light: {
    brand: {
      primary: {
        '5': '#f4f5fc',
        'alpha-5': '#262ebc0d',
        'alpha-10': '#262ebc1a',
        'alpha-20': '#262ebc33',
        'alpha-40': '#262ebc66',
        'alpha-60': '#262ebc99',
        'alpha-80': '#262ebccc',
        'alpha-100': '#262ebcff',
        '10': '#e9eaf8',
        '20': '#d4d5f2',
        '40': '#a8abe4',
        '60': '#7d82d7',
        '80': '#5158ca',
        '100': '#262ebc',
      },
      secondary: {
        '5': '#edf0fd',
        'alpha-5': '#4b68e70d',
        'alpha-10': '#4b68e71a',
        'alpha-20': '#4b68e733',
        'alpha-40': '#4b68e766',
        'alpha-60': '#4b68e799',
        'alpha-80': '#4b68e7cc',
        'alpha-100': '#4b68e7ff',
        '10': '#dbe1fa',
        '20': '#c9d2f8',
        '40': '#b7c3f6',
        '60': '#a5b4f3',
        '80': '#8195ef',
        '100': '#4b68e7',
      },
      accent: {
        '5': '#f6f3ee',
        'alpha-5': '#a687560d',
        'alpha-10': '#a687561a',
        'alpha-20': '#a6875633',
        'alpha-40': '#a6875666',
        'alpha-60': '#a6875699',
        'alpha-80': '#a68756cc',
        'alpha-100': '#a68756ff',
        '10': '#ede7dd',
        '20': '#e4dbcc',
        '40': '#dbcfbb',
        '60': '#cab79a',
        '80': '#b89f78',
        '100': '#a68756',
      },
    },
    material: {
      surface: {
        '0': '#f4f4f4',
        '5': '#ebebeb',
        '10': '#e6e6e6',
        '20': '#cccccc',
        '40': '#999999',
        '60': '#666666',
        '80': '#333333',
        '100': '#161616',
      },
      alphaDark: {
        '5': '#1616160d',
        '10': '#1616161a',
        '20': '#16161633',
        '40': '#16161666',
        '60': '#16161699',
        '80': '#161616cc',
      },
    },
    solid: {
      white: '#f4f4f4',
      black: '#000000',
      primary: '#262ebc',
      secondary: '#4b68e7',
      accent: '#a68756',
    },
    system: {
      error: {
        '5': '#f82b2b0d',
        '20': '#f82b2b33',
        '40': '#f82b2b66',
        '60': '#f82b2b99',
        '80': '#f82b2bcc',
        '100': '#f82b2b',
      },
      success: {
        '5': '#83ae270d',
        '10': '#83ae271a',
        '20': '#83ae2733',
        '40': '#83ae2766',
        '60': '#83ae2799',
        '80': '#83ae27cc',
        '100': '#83ae27',
      },
      warning: {
        '5': '#ffba420d',
        '10': '#ffba421a',
        '20': '#ffba4233',
        '40': '#ffba4266',
        '60': '#ffba4299',
        '80': '#ffba42cc',
        '100': '#ffba42',
      },
    },
  },
  dark: {
    brand: {
      primary: {
        '5': '#f4f5fc',
        'alpha-5': '#e9eaf80d',
        'alpha-10': '#e9eaf81a',
        'alpha-20': '#e9eaf833',
        'alpha-40': '#e9eaf866',
        'alpha-60': '#e9eaf899',
        'alpha-80': '#e9eaf8cc',
        'alpha-100': '#e9eaf8ff',
        '10': '#262ebc',
        '20': '#5158ca',
        '40': '#7d82d7',
        '60': '#a8abe4',
        '80': '#d4d5f2',
        '100': '#e9eaf8',
      },
      secondary: {
        '5': '#4b68e7',
        'alpha-5': '#edf0fd0d',
        'alpha-10': '#edf0fd1a',
        'alpha-20': '#edf0fd33',
        'alpha-40': '#edf0fd66',
        'alpha-60': '#edf0fd99',
        'alpha-80': '#edf0fdcc',
        'alpha-100': '#edf0fdff',
        '10': '#8195ef',
        '20': '#a5b4f3',
        '40': '#b7c3f6',
        '60': '#c9d2f8',
        '80': '#dbe1fa',
        '100': '#edf0fd',
      },
      accent: {
        '5': '#a68756',
        'alpha-5': '#f6f3ee0d',
        'alpha-10': '#f6f3ee1a',
        'alpha-20': '#f6f3ee33',
        'alpha-40': '#f6f3ee66',
        'alpha-60': '#f6f3ee99',
        'alpha-80': '#f6f3eecc',
        'alpha-100': '#f6f3eeff',
        '10': '#b89f78',
        '20': '#cab79a',
        '40': '#dbcfbb',
        '60': '#e4dbcc',
        '80': '#ede7dd',
        '100': '#f6f3ee',
      },
    },
    material: {
      surface: {
        '0': '#161616',
        '5': '#333333',
        '10': '#666666',
        '20': '#999999',
        '40': '#cccccc',
        '60': '#e6e6e6',
        '80': '#ebebeb',
        '100': '#f4f4f4',
      },
      alphaDark: {
        '5': '#f4f4f40d',
        '10': '#f4f4f41a',
        '20': '#f4f4f433',
        '40': '#f4f4f466',
        '60': '#f4f4f499',
        '80': '#f4f4f4cc',
      },
    },
    solid: {
      white: '#161616',
      black: '#f4f4f4',
      primary: '#7d82d7',
      secondary: '#a5b4f3',
      accent: '#cab79a',
    },
    system: {
      error: {
        '5': '#f82b2b0d',
        '20': '#f82b2b33',
        '40': '#f82b2b66',
        '60': '#f82b2b99',
        '80': '#f82b2bcc',
        '100': '#f82b2b',
      },
      success: {
        '5': '#83ae270d',
        '10': '#83ae271a',
        '20': '#83ae2733',
        '40': '#83ae2766',
        '60': '#83ae2799',
        '80': '#83ae27cc',
        '100': '#83ae27',
      },
      warning: {
        '5': '#ffba420d',
        '10': '#ffba421a',
        '20': '#ffba4233',
        '40': '#ffba4266',
        '60': '#ffba4299',
        '80': '#ffba42cc',
        '100': '#ffba42',
      },
    },
  },
} as const;
