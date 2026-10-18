import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { SVGColor } from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { ChipProps, ChipRadius } from './index.types';

/**
 * Chip Component (Molecule)
 *
 * A pill/rounded input/filter chip with optional leading and trailing icons
 * and a selected state.
 * Source: Mariner-Library / Molecules / Chips/InputChip (Figma, node 286:16571).
 *
 * Design specs:
 * - Border: brand-primary-20 (primary) / brand-accent-80 (secondary)
 * - Radius: `radius` token — 'full' (pill) by default; 'xs'/'xxxs' for the squared style
 * - Sizes: md (footnote 13px, 34px tall) / sm (caption 11px, 25px tall)
 * - primary: surface-light bg + primary-80 content; selected → primary-10 bg
 *   (secondary-10 when icon-only) + primary-100 content
 * - secondary: surface-light bg + surface-80 content; selected → accent-10 bg
 * - Icon-only chips are fixed squares (25px sm / 34px md) with a 24px icon;
 *   labelled chips use 18px icons
 *
 * @example
 * <Chip label="Find nearest" iconName="ico-my-location" selected />
 * <Chip label="Filter" trailingIconName="ico-chevron-down" />
 * <Chip label="Marinas" selected trailingIconName="ico-close" />
 * <Chip variant="secondary" size="sm" radius="xs" label="Tides" />
 * <Chip iconName="ico-my-location" selected />
 */
const radiusClass: Record<ChipRadius, string> = {
  xxxs: 'rounded-xxxs',
  xxs: 'rounded-xxs',
  xs: 'rounded-xs',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  xxl: 'rounded-xxl',
  xxxl: 'rounded-xxxl',
  full: 'rounded-full',
};

const Chip = ({
  label,
  variant = 'primary',
  size = 'md',
  radius = 'full',
  selected = false,
  iconName,
  trailingIconName,
  onPress,
  className = '',
}: ChipProps) => {
  const hasLabel = !!label;
  const iconOnly = !hasLabel && (!!iconName || !!trailingIconName);

  const border = variant === 'primary' ? 'border-brand-primary-20' : 'border-brand-accent-80';

  const selectedBg =
    variant === 'primary'
      ? iconOnly
        ? 'bg-brand-secondary-10'
        : 'bg-brand-primary-10'
      : 'bg-brand-accent-10';
  const bg = selected ? selectedBg : 'bg-material-surface-light';

  const contentColor: SVGColor =
    variant === 'secondary'
      ? 'text-material-surface-80'
      : selected
        ? 'text-brand-primary-100'
        : 'text-brand-primary-80';

  const layout = iconOnly
    ? `justify-center ${size === 'sm' ? 'w-[25px] h-[25px]' : 'w-[34px] h-[34px]'}`
    : size === 'sm'
      ? 'px-xs py-xxs gap-xxs'
      : 'px-sm py-xs gap-xs';
  const iconSize = iconOnly ? 'w-[24px] h-[24px]' : 'w-[18px] h-[18px]';
  const textStyle = size === 'sm' ? 'caption' : 'footnote';

  return (
    <PressableStyled onPress={onPress} className="self-start">
      <Row
        className={`items-center overflow-hidden border ${border} ${radiusClass[radius]} ${bg} ${layout} ${className}`.trim()}>
        {iconName && <Icon iconName={iconName} color={contentColor} className={iconSize} />}
        {hasLabel && (
          <ViewStyled className="px-xs">
            <TextStyled textStyle={textStyle} className={contentColor}>
              {label}
            </TextStyled>
          </ViewStyled>
        )}
        {trailingIconName && (
          <Icon iconName={trailingIconName} color={contentColor} className={iconSize} />
        )}
      </Row>
    </PressableStyled>
  );
};

export default Chip;
