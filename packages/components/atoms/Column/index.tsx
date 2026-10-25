import React from 'react';
import { ViewStyle } from 'react-native';
import { StyledView } from '../../utils/styled';

export type ColumnProps = {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  className?: string;
};

const Column = ({ children, style, className }: ColumnProps) => {
  const mergedClassName = className ? `flex flex-col ${className}` : 'flex flex-col';
  
  return (
    <StyledView style={style} className={mergedClassName}>
      {children}
    </StyledView>
  );
};

export default Column;
