import React from 'react';

export type ViewStyledProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

/**
 * ViewStyled - Web version
 *
 * A wrapper component for web that uses div with Tailwind classes.
 *
 * @example
 * <ViewStyled className="p-4 bg-white">
 *   <span>Content</span>
 * </ViewStyled>
 */
const ViewStyled = ({ children, style, className }: ViewStyledProps) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default ViewStyled;
