import React from 'react';

export type StyledTextProps = {
  text?: string;
  children?: React.ReactNode;
  textStyle?: string;
  colorCategory?: 'brand' | 'material' | 'solid' | 'system';
  colorName?: string;
  colorVariant?: string;
  textAlign?: 'left' | 'center' | 'right';
  numberOfLines?: number;
  style?: React.CSSProperties;
  className?: string;
};

const TextStyled: React.FC<StyledTextProps> = ({
  text,
  children,
  textStyle,
  colorCategory,
  colorName,
  colorVariant,
  textAlign,
  numberOfLines,
  style,
  className,
}) => {
  // Build Tailwind className from props
  const buildClassName = (): string => {
    const classes: string[] = [];

    // Typography (font size, line height, weight)
    if (textStyle) {
      classes.push(`text-${textStyle}`);
      classes.push('font-montserrat');
    }

    // Color
    if (colorCategory && colorName) {
      if (colorCategory === 'brand') {
        const colorClass = colorVariant 
          ? `text-brand-${colorName}-${colorVariant}`
          : `text-brand-${colorName}`;
        classes.push(colorClass);
      } else if (colorCategory === 'material') {
        const colorClass = colorVariant
          ? `text-material-${colorName}-${colorVariant}`
          : `text-material-${colorName}`;
        classes.push(colorClass);
      } else if (colorCategory === 'solid') {
        classes.push(`text-solid-${colorName}`);
      } else if (colorCategory === 'system') {
        const colorClass = colorVariant
          ? `text-system-${colorName}-${colorVariant}`
          : `text-system-${colorName}`;
        classes.push(colorClass);
      }
    }

    // Text alignment
    if (textAlign) {
      classes.push(`text-${textAlign}`);
    }

    // Add custom className if provided
    if (className) {
      classes.push(className);
    }

    return classes.filter(Boolean).join(' ');
  };

  const combinedClassName = buildClassName();
  
  // Handle numberOfLines with CSS
  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(numberOfLines && {
      display: '-webkit-box',
      WebkitLineClamp: numberOfLines,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }),
  };

  return (
    <span 
      style={combinedStyle}
      className={combinedClassName}>
      {text}
      {children}
    </span>
  );
};

export default TextStyled;
