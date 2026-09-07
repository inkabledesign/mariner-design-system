import React from 'react';
import Row from '../Row';
import TextStyled from '../TextStyled';
import Icon from '../Icon';
import type { SVGColor } from '../Icon';
import type { TagProps } from './index.types';

/**
 * Tag Component (Atom)
 *
 * A compact pill used to surface a short descriptor such as a coordinate or
 * label, optionally prefixed with an icon.
 *
 * Source: Mariner-Library / Atoms / Tags/Tag (Figma).
 *
 * Design specs:
 * - Shape: pill, radius-lg (18px)
 * - Padding: py xxs (4), leading sm (8) / trailing md (12); px md (12) when icon-less
 * - Gap: xs (6)
 * - Typography: label (11.11px, Montserrat Medium)
 * - primary: bg brand-primary-10, text brand-primary-100
 * - secondary: bg material-surface-5, text material-surface-80
 *
 * @example
 * <Tag label="51 30' 40''N, 0 2' 12''W" variant="primary" />
 *
 * @example
 * <Tag label="Filter" variant="secondary" hasIcon={false} />
 */
const Tag = ({
  label,
  variant = 'primary',
  hasIcon = true,
  iconName = 'ico-pin',
  className = '',
}: TagProps) => {
  const styles =
    variant === 'primary'
      ? {
          bg: 'bg-brand-primary-10 dark:bg-brand-primary-80',
          text: 'text-brand-primary-100 dark:text-brand-primary-10',
          icon: 'text-brand-primary-100' as SVGColor,
        }
      : {
          bg: 'bg-material-surface-5 dark:bg-material-surface-80',
          text: 'text-material-surface-80 dark:text-material-surface-5',
          icon: 'text-material-surface-80' as SVGColor,
        };

  const padding = hasIcon ? 'pl-sm pr-md py-xxs' : 'px-md py-xxs';

  return (
    <Row
      className={`
        ${styles.bg}
        ${padding}
        rounded-lg items-center gap-xs self-start
        ${className}
      `.trim()}>
      {hasIcon && <Icon iconName={iconName} color={styles.icon} className="w-4 h-4" />}
      <TextStyled textStyle="label" className={styles.text}>
        {label}
      </TextStyled>
    </Row>
  );
};

export default Tag;
