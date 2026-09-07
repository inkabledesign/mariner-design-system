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
 * Source: Mariner-Library / Molecules / Chips/InputChip (Figma).
 *
 * Design specs:
 * - Shape: pill (rounded-full), py sm, leading sm / trailing lg, gap xs
 * - Typography: footnote (13.3px / 500)
 * - unselected: surface-0 bg, primary-5 border, primary-80 text
 * - selected: primary-10 bg, primary-100 text
 *
 * @example
 * <Chip type="icon" label="Find nearest" iconName="ico-mylocation" selected />
 */
const Chip = ({
  label,
  type = 'text',
  selected = false,
  hasText = true,
  iconName = 'ico-mylocation',
  trailingIconName = 'ico-filter-round',
  onPress,
  className = '',
}: ChipProps) => {
  const showLeading = type === 'icon';
  const showTrailing = type === 'filter';
  const showText = hasText && !!label;

  const bg = selected ? 'bg-brand-primary-10' : 'bg-material-surface-0';
  const textColor = selected ? 'text-brand-primary-100' : 'text-brand-primary-80';
  const iconColor: SVGColor = selected ? 'text-brand-primary-100' : 'text-brand-primary-80';

  const padding = showText ? 'pl-sm pr-lg py-sm' : 'p-xxs';

  return (
    <PressableStyled onPress={onPress}>
      <Row
        className={`items-center gap-xs rounded-full border border-brand-primary-5 self-start ${bg} ${padding} ${className}`.trim()}>
        {showLeading && <Icon iconName={iconName} color={iconColor} className="w-[18px] h-[18px]" />}
        {showText && (
          <TextStyled textStyle="footnote" className={textColor}>
            {label}
          </TextStyled>
        )}
        {showTrailing && (
          <Icon iconName={trailingIconName} color={iconColor} className="w-[18px] h-[18px]" />
        )}
      </Row>
    </PressableStyled>
  );
};

export default Chip;
