import React from 'react';

export type ColumnProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Column = ({ children, style, className }: ColumnProps) => {
  const mergedClassName = className ? `flex flex-col ${className}` : 'flex flex-col';
  
  return (
    <div style={style} className={mergedClassName}>
      {children}
    </div>
  );
};

export default Column;
