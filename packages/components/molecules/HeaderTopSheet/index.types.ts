import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import type { IconName } from '../../types/icons.type';

export interface HeaderTopSheetProps {
  /**
   * Title shown under the avatar (e.g. user name).
   */
  title?: string;

  /**
   * Numeric rating shown with a star icon.
   */
  rating?: number;

  /**
   * Subtitle (e.g. qualification).
   */
  subtitle?: string;

  /**
   * Avatar image URL.
   */
  imageUrl?: string;

  /**
   * Avatar fallback icon.
   */
  iconName?: IconName;

  /**
   * Avatar edit handler.
   */
  onEditPress?: () => void;

  /**
   * Optional content rendered at the bottom of the sheet.
   */
  children?: ReactNode;

  /**
   * Optional shared value driving the container height (scroll-linked).
   */
  animatedHeight?: SharedValue<number>;

  /**
   * Optional shared value driving the avatar scale.
   */
  animatedAvatarScale?: SharedValue<number>;

  /**
   * Optional shared value driving the collapse animation — maps position
   * 102→170 to progress 0→1.
   */
  animatedPositionY?: SharedValue<number>;

  /**
   * Additional styles for the container.
   */
  style?: ViewStyle;
}
