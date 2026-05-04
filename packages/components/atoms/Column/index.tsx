import React from 'react';
import { View, ViewStyle } from 'react-native';

export type ColumnProps = {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  className?: string;
};

const Column = ({ children, style, className }: ColumnProps) => {
  const mergedClassName = className ? `flex flex-col ${className}` : 'flex flex-col';
  
  return (
    <View style={style} className={mergedClassName}>
      {children}
    </View>
  );
};

export default Column;
