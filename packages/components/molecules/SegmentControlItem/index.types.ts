import type { Breakpoint } from '@inkabledesign/mariner-theme';

/**
 * Selected-segment appearance.
 * - 'secondary': light surface with accent border and soft accent shadow
 * - 'primary': solid primary fill with accent border and soft accent shadow
 */
export type SegmentControlVariant = 'secondary' | 'primary';

/**
 * Corner style.
 * - 'pill': fully rounded ends
 * - 'rounded': small corner radius
 */
export type SegmentControlShape = 'pill' | 'rounded';

/**
 * Segment height: 'lg' = 48px, 'sm' = 36px.
 */
export type SegmentControlSize = 'sm' | 'lg';

export interface SegmentControlItemProps {
  /**
   * Item label (e.g. "12:20 am"). Undefined renders nothing —
   * used internally to render the sliding selection indicator.
   */
  label?: string;

  /**
   * Selected state — active label color plus the selection background
   * (unless `indicator` is false).
   * @default false
   */
  isActive?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Height — 'lg': 48px, 'sm': 36px.
   * @default 'lg'
   */
  size?: SegmentControlSize;

  /**
   * Corner style — 'pill': fully rounded, 'rounded': small radius.
   * @default 'pill'
   */
  shape?: SegmentControlShape;

  /**
   * Selected appearance — 'secondary': light surface + accent border,
   * 'primary': solid primary fill.
   * @default 'secondary'
   */
  variant?: SegmentControlVariant;

  /**
   * Render the selection background when active. SegmentControl sets this to
   * false on its cells because a single sliding indicator supplies the
   * selected background for the whole control.
   * @default true
   */
  indicator?: boolean;

  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';

  /** Breakpoint for token resolution @default 'mobile' */
  breakpoint?: Breakpoint;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
