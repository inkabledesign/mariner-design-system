import { color } from '../colors';
import { typography } from '../typography';
import { spacing } from '../spacing';
import { radius } from '../radius';
import { size } from '../size';
import { useBreakpoint } from './useBreakpoint';
import type { Theme } from '../types';

/**
 * Hook for convenient access to design tokens with hot reload support
 * 
 * This hook provides direct access to all design tokens at runtime,
 * enabling instant hot reload when token values change.
 * 
 * @example
 * ```tsx
 * const { spacing, radius, typography, color } = useDesignTokens();
 * 
 * <View style={{
 *   padding: spacing.md,
 *   borderRadius: radius.lg,
 *   backgroundColor: color.light.brand.primary['100'],
 * }}>
 *   <Text style={{
 *     ...typography.heading1,
 *     color: color.light.brand.primary['100'],
 *   }}>
 *     Title
 *   </Text>
 * </View>
 * ```
 */
export function useDesignTokens() {
  const { breakpoint } = useBreakpoint();

  const theme: Theme = { color, typography, spacing, radius, size };

  return {
    /** Spacing tokens for current breakpoint (hot reload) */
    spacing: spacing[breakpoint].spacing,

    /** Radius tokens for current breakpoint (hot reload) */
    radius: radius[breakpoint].radius,

    /** Size tokens for current breakpoint (hot reload) */
    size: size[breakpoint].size,

    /** Typography tokens for current breakpoint (hot reload) */
    typography: typography[breakpoint].text,

    /** Color tokens (light and dark modes) (hot reload) */
    color,

    /** Current breakpoint */
    breakpoint,

    /** Full theme object */
    theme,
  };
}
