import React from 'react';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { SVGColor } from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { ChipProps } from './index.types';

/**
 * Chip Component (Molecule)
 *
 * A pill-shaped input/filter chip with optional leading and trailing icons and
 * a selected state.
 * Source: Mariner-Library / Molecules / Chips/InputChip (Figma, node 286:16571).
 *
 * Design specs:
 * - Shape: pill (radius-xxl), 34px height, brand-primary-20 border
 * - Typography: footnote (13px / 600)
 * - unselected: surface-light bg, primary-80 content
 * - selected: primary-10 bg (secondary-10 when icon-only), primary-100 content
 * - Padding: lg on edges next to text, sm on edges next to an 18px icon,
 *   xxs for icon-only chips (24px icon)
 * - Trailing: filter chips default to ico-chevron-down, removable chips use ico-close
 *
 * @example
 * <Chip type="icon" label="Find nearest" selected />
 * <Chip type="filter" label="Filter" />
 * <Chip type="text" label="Marinas" selected trailingIconName="ico-close" />
 */
const Chip = ({
  label,
  type = 'text',
  selected = false,
  iconName,
  trailingIconName,
  onPress,
  className = '',
}: ChipProps) => {
  const leadingIconName = iconName ?? (type === 'icon' ? 'ico-mylocation' : undefined);
  const resolvedTrailingIconName =
    trailingIconName ?? (type === 'filter' ? 'ico-chevron-down' : undefined);

  const hasLabel = !!label;
  const iconOnly = !hasLabel && !!leadingIconName !== !!resolvedTrailingIconName;

  const bg = selected
    ? iconOnly
      ? 'bg-brand-secondary-10'
      : 'bg-brand-primary-10'
    : 'bg-material-surface-light';
  const contentColor: SVGColor = selected ? 'text-brand-primary-100' : 'text-brand-primary-80';

  const padding = iconOnly
    ? 'p-xxs'
    : `h-[34px] py-sm ${leadingIconName ? 'pl-sm' : 'pl-lg'} ${resolvedTrailingIconName ? 'pr-sm' : 'pr-lg'}`;
  const iconSize = iconOnly ? 'w-[24px] h-[24px]' : 'w-[18px] h-[18px]';

  return (
    <PressableStyled onPress={onPress} className="self-start">
      <Row
        className={`items-center gap-xs overflow-hidden rounded-full border border-brand-primary-20 ${bg} ${padding} ${className}`.trim()}>
        {leadingIconName && (
          <Icon iconName={leadingIconName} color={contentColor} className={iconSize} />
        )}
        {hasLabel && (
          <TextStyled textStyle="footnote" className={contentColor}>
            {label}
          </TextStyled>
        )}
        {resolvedTrailingIconName && (
          <Icon iconName={resolvedTrailingIconName} color={contentColor} className={iconSize} />
        )}
      </Row>
    </PressableStyled>
  );
};

export default Chip;
