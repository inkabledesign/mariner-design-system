import type { ViewStyle } from 'react-native';
import { IconName } from '@/types/icons.type';

export interface AvatarProps {
  size?: number;
  imageUrl?: string;
  iconName?: IconName; // Any icon name, type is auto-detected
  onEditPress?: () => void;
  style?: ViewStyle;
  className?: string;
}
