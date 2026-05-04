import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import ViewStyled from '../ViewStyled';

type DividerProps = {
  type?: 'horizontal' | 'vertical';
  className?: string;
  style?: StyleProp<ViewStyle>;
};

const Divider = (props: DividerProps) => {
  return (
    <ViewStyled
      style={[
        props.style,
        props.type === 'horizontal' ? { height: 1, width: '100%' } : { width: 1, height: '100%' },
      ]}
      className={props.className}
    />
  );
};

export default Divider;
