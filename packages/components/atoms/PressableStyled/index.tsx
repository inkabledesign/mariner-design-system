import React from 'react';
import { PressableProps, ViewStyle } from 'react-native';
import { StyledPressable } from '../../utils/styled';

export type PressableStyledProps = PressableProps & {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  className?: string;
};

const PressableStyled = ({ children, style, className, ...pressableProps }: PressableStyledProps) => {
  return (
    <StyledPressable style={style} className={className} {...pressableProps}>
      {children}
    </StyledPressable>
  );
};

export default PressableStyled;
