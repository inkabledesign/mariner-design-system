import type { IconName } from "../../types/icons.type";
import type { BadgeVariant } from "../Badge/index.types";

/** Leading slot content type. Not rendered when omitted. */
export type ListItemLeading = "avatar" | "icon" | "switch" | "radio";

/** Trailing control type. `value` and icons render conditionally alongside it. */
export type ListItemTrailing = "icon" | "switch" | "radio";

export interface ListItemProps {
  /** Small label above the title (brand-primary). Rendered when provided. */
  label?: string;

  /** Main title text. Rendered when provided. */
  title?: string;

  /** Supporting text below the title. Rendered when provided. */
  caption?: string;

  /** Trailing value text (heading6, surface-60). Rendered when provided. */
  value?: string;

  /** Leading content type. Not rendered when omitted. */
  leading?: ListItemLeading;

  /** Leading icon glyph (leading="icon"). @default 'ico-berth-round' */
  leadingIconName?: IconName;

  /**
   * Progress percentage for the ring around the leading icon (leading="icon").
   * The ring is rendered when provided.
   */
  leadingProgress?: number;

  /** Image URL used when leading="avatar". */
  avatarImageUrl?: string;

  /** Fallback glyph used when leading="avatar". */
  avatarIconName?: IconName;

  /** Trailing control type. Not rendered when omitted. */
  trailing?: ListItemTrailing;

  /** Primary (right-most) trailing icon glyph (trailing="icon"). @default 'ico-chevron-right' */
  trailingIconOne?: IconName;

  /** Secondary trailing icon glyph, rendered left of icon one when provided (trailing="icon"). */
  trailingIconTwo?: IconName;

  /** Trailing badge label. A sm Badge renders between the trailing control and icons when provided. */
  badgeLabel?: string;

  /** Trailing badge variant. @default 'primary' */
  badgeVariant?: BadgeVariant;

  /** Trailing badge icon. Rendered when provided. */
  badgeIconName?: IconName;

  /** Checked state for switch/radio (leading or trailing). */
  checked?: boolean;

  /** Toggle handler for switch/radio. */
  onToggle?: (value: boolean) => void;

  /** Row press handler. */
  onPress?: () => void;

  /** Theme mode for nested control color resolution @default 'light' */
  themeMode?: 'light' | 'dark';

  /** Additional Tailwind classes for the container. */
  className?: string;
}
