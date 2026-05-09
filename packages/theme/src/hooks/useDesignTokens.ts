import { theme } from '../index';
import { useBreakpoint } from './useBreakpoint';

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
  
  return {
    /** Spacing tokens for current breakpoint (hot reload) */
    spacing: theme.spacing[breakpoint].spacing,
    
    /** Radius tokens for current breakpoint (hot reload) */
    radius: theme.radius[breakpoint].radius,
    
    /** Typography tokens for current breakpoint (hot reload) */
    typography: theme.typography[breakpoint].text,
    
    /** Color tokens (light and dark modes) (hot reload) */
    color: theme.color,
    
    /** Current breakpoint */
    breakpoint,
    
    /** Full theme object */
    theme,
  };
}
