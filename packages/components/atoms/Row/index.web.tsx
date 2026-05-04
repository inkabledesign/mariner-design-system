import React from 'react';

export type RowProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Row = ({ children, style, className }: RowProps) => {
  const mergedClassName = className ? `flex flex-row ${className}` : 'flex flex-row';
  
  return (
    <div style={style} className={mergedClassName}>
      {children}
    </div>
  );
};

export default Row;
