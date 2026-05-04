import React from 'react';

export type PressableStyledProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
};

const PressableStyled = ({ 
  children, 
  style, 
  className, 
  onPress,
  disabled,
}: PressableStyledProps) => {
  return (
    <button 
      type="button"
      style={style} 
      className={className} 
      onClick={onPress}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PressableStyled;
