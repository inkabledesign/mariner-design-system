import type { StyleProp, ViewStyle } from 'react-native';

export interface ViewStyledProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
}
