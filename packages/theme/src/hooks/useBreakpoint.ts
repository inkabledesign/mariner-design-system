import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';

export interface BreakpointContextValue {
  breakpoint: Breakpoint;
  width: number;
  height: number;
}

const defaultValue: BreakpointContextValue = {
  breakpoint: 'mobile',
  width: 0,
  height: 0,
};

export const BreakpointContext = createContext<BreakpointContextValue>(defaultValue);

/**
 * Determine breakpoint based on screen width (Tailwind defaults)
 */
export const getBreakpointFromWidth = (width: number): Breakpoint => {
  if (width < 640) return 'mobile';
  if (width < 768) return 'tablet';
  if (width < 1024) return 'desktop-sm';
  return 'desktop-lg';
};

interface BreakpointProviderProps {
  children: React.ReactNode;
}

/**
 * BreakpointProvider — provides current breakpoint to all children.
 *
 * React Native: defaults to 'mobile' but responds to Dimensions changes.
 * Web: dynamically updates based on window resize.
 *
 * Wrap your app root with this provider so components can auto-detect the
 * current breakpoint via `useBreakpoint()`.
 */
export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({ children }) => {
  const [dimensions, setDimensions] = useState(() => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  const breakpoint = getBreakpointFromWidth(dimensions.width);

  return React.createElement(
    BreakpointContext.Provider,
    { value: { breakpoint, ...dimensions } },
    children,
  );
};

/**
 * Hook to access the current breakpoint.
 *
 * Must be used within a `BreakpointProvider`. If no provider is present,
 * returns `'mobile'` as a safe default.
 *
 * @example
 * const { breakpoint, width } = useBreakpoint();
 */
export const useBreakpoint = (): BreakpointContextValue => {
  return useContext(BreakpointContext);
};
