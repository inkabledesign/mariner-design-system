import React from 'react';
import { ViewStyle } from 'react-native';
import { StyledView } from '../../utils/styled';

export type RowProps = {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  className?: string;
};

const Row = ({ children, style, className }: RowProps) => {
  const mergedClassName = className ? `flex flex-row ${className}` : 'flex flex-row';
  
  return (
    <StyledView style={style} className={mergedClassName}>
      {children}
    </StyledView>
  );
};

export default Row;
