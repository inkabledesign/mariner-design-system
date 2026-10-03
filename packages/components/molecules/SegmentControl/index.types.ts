import type { Breakpoint } from '@inkabledesign/mariner-theme';
import type {
  SegmentControlShape,
  SegmentControlSize,
  SegmentControlVariant,
} from '../SegmentControlItem/index.types';

export interface SegmentControlOption {
  /**
   * Unique identifier for the option.
   */
  id: string;

  /**
   * Display label for the option.
   */
  label: string;
}

export interface SegmentControlProps {
  /**
   * Options to display.
   */
  options: SegmentControlOption[];

  /**
   * Currently selected option ID.
   */
  selectedId: string;

  /**
   * Callback when selection changes.
   */
  onChange: (id: string) => void;

  /**
   * Height — 'lg': 48px, 'sm': 36px.
   * @default 'lg'
   */
  size?: SegmentControlSize;

  /**
   * Corner style — 'pill': fully rounded, 'rounded': small radius.
   * @default 'rounded'
   */
  shape?: SegmentControlShape;

  /**
   * Selected appearance — 'secondary': light surface + accent border,
   * 'primary': solid primary fill.
   * @default 'secondary'
   */
  variant?: SegmentControlVariant;

  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';

  /** Breakpoint for token resolution @default 'mobile' */
  breakpoint?: Breakpoint;

  /**
   * Additional Tailwind classes for the outer container.
   */
  className?: string;
}
