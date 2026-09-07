import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import ToggleSwitch from '../../atoms/ToggleSwitch';
import RadioButton from '../../atoms/RadioButton';
import type { ListItemSimpleProps } from './index.types';

/**
 * ListItemSimple Component (Molecule)
 *
 * A single-line list row with optional leading icon, a label/title stack, and a
 * trailing chevron / switch / radio.
 * Source: Mariner-Library / Molecules / List/ListItemSimple (Figma).
 *
 * @example
 * <ListItemSimple label="Setting" title="Notifications" trailing="switch" checked onToggle={fn} />
 */
const ListItemSimple = ({
  label,
  title,
  leadingIconName,
  trailing = 'chevron',
  checked = false,
  onToggle,
  onPress,
  className = '',
}: ListItemSimpleProps) => (
  <PressableStyled onPress={onPress}>
    <Row className={`items-center gap-md rounded-md bg-material-surface-0 px-lg py-xs ${className}`.trim()}>
      {leadingIconName && (
        <Icon iconName={leadingIconName} color="text-brand-primary-100" className="w-6 h-6" />
      )}
      <Column className="flex-1">
        {label && (
          <TextStyled textStyle="label" className="text-brand-primary-100">
            {label}
          </TextStyled>
        )}
        <TextStyled textStyle="heading6" className="text-material-surface-80">
          {title}
        </TextStyled>
      </Column>
      {trailing === 'chevron' && (
        <Icon iconName="ico-chevron-right" color="text-brand-primary-100" className="w-6 h-6" />
      )}
      {trailing === 'switch' && <ToggleSwitch checked={checked} onToggle={onToggle} />}
      {trailing === 'radio' && (
        <RadioButton checked={checked} onPress={() => onToggle?.(!checked)} />
      )}
    </Row>
  </PressableStyled>
);

export default ListItemSimple;
