import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

export type PressableStyledProps = PressableProps & {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  className?: string;
};

const PressableStyled = ({ children, style, className, ...pressableProps }: PressableStyledProps) => {
  return (
    <Pressable style={style} className={className} {...pressableProps}>
      {children}
    </Pressable>
  );
};

export default PressableStyled;
