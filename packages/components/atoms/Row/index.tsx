import React from 'react';
import { View, ViewStyle } from 'react-native';

export type RowProps = {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  className?: string;
};

const Row = ({ children, style, className }: RowProps) => {
  const mergedClassName = className ? `flex flex-row ${className}` : 'flex flex-row';
  
  return (
    <View style={style} className={mergedClassName}>
      {children}
    </View>
  );
};

export default Row;
