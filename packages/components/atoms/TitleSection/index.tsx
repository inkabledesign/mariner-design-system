import React from 'react';
import Row from '../Row';
import TextStyled from '../TextStyled';
import Icon from '../Icon';
import type { SVGColor } from '../Icon';
import PressableStyled from '../PressableStyled';
import ViewStyled from '../ViewStyled';
import type { TitleSectionProps } from './index.types';

/**
 * TitleSection Component (Atom)
 *
 * A section heading with an optional trailing action icon.
 * Source: Mariner-Library / Atoms / TexBlock/TitleSection (Figma) — heading4.
 *
 * @example
 * <TitleSection title="Most popular marinas" theme="light" hasIcon onPressIcon={fn} />
 */
const TitleSection = ({
  title,
  theme = 'light',
  hasIcon = false,
  iconName = 'ico-edit',
  onPressIcon,
  className = '',
}: TitleSectionProps) => {
  const textColor =
    theme === 'accent'
      ? 'text-brand-accent-100'
      : theme === 'dark'
        ? 'text-material-surface-100'
        : 'text-brand-primary-100';

  // Per Figma the edit icon stays brand-primary on the accent theme.
  const iconColor: SVGColor = theme === 'dark' ? 'text-material-surface-100' : 'text-brand-primary-100';

  const icon = <Icon iconName={iconName} color={iconColor} className="w-6 h-6" />;

  return (
    <Row className={`items-center justify-between gap-sm ${className}`.trim()}>
      <TextStyled textStyle="heading4" className={textColor}>
        {title}
      </TextStyled>
      {hasIcon &&
        (onPressIcon ? (
          <PressableStyled onPress={onPressIcon}>{icon}</PressableStyled>
        ) : (
          <ViewStyled>{icon}</ViewStyled>
        ))}
    </Row>
  );
};

export default TitleSection;
