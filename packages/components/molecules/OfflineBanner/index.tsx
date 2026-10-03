import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import Icon from '../../atoms/Icon';
import TextStyled from '../../atoms/TextStyled';
import type { OfflineBannerProps } from './index.types';

/**
 * OfflineBanner Component (Molecule)
 *
 * A floating banner shown above the tab bar when the app is offline.
 * Source: mariner-edu molecules/OfflineBanner (presentational port).
 *
 * @example
 * <OfflineBanner isOffline />
 */
const OfflineBanner = ({
  isOffline,
  text = 'Offline mode is on. No internet connection',
  iconName = 'ico-wifi-off-outline',
  className = '',
}: OfflineBannerProps) => {
  const insets = useSafeAreaInsets();

  if (!isOffline) return null;

  return (
    <ViewStyled
      className={`absolute left-0 right-0 px-md py-sm justify-center items-center z-50 ${className}`.trim()}
      style={{ bottom: insets.bottom + 56 }}
    >
      <Row className="w-full items-center gap-sm rounded-md bg-solid-white border border-system-warning-100 px-md py-sm">
        <Icon iconName={iconName} color="text-system-warning-100" className="w-5 h-5" />
        <TextStyled textStyle="footnote" className="flex-1 text-material-surface-100">
          {text}
        </TextStyled>
      </Row>
    </ViewStyled>
  );
};

export default OfflineBanner;
