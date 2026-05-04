import React from 'react';
import AnimatedCircleProgress from '../AnimatedCircleProgress';
import Column from '../Column';
import TextStyled from '../TextStyled';
// Theme context removed - using direct token imports instead
import type { DonutStatsProps } from './index.types';

const DonutStats = ({
  percentage,
  size = 120,
  strokeWidth = 12,
  label,
  showPercentage = true,
  duration = 1000,
  railColor,
  barColor,
}: DonutStatsProps) => {
  const theme = useTheme();

  // Use theme colors by default
  const defaultRailColor = theme.color.light.brand.accent['20'];
  const defaultBarColor = theme.color.light.brand.accent['100'];

  const finalRailColor = railColor || defaultRailColor;
  const finalBarColor = barColor || defaultBarColor;

  return (
    <Column className="items-center justify-center">
      <AnimatedCircleProgress
        progress={percentage}
        size={size}
        strokeWidth={strokeWidth}
        progressColor={finalBarColor}
        railColor={finalRailColor}
        duration={duration}>
        {/* Center percentage text */}
        {showPercentage && (
          <TextStyled
            style={{ fontSize: size * 0.25 }}
            textStyle="heading2"
            colorCategory="material"
            colorName="surface"
            colorVariant="100">
            {Math.round(percentage)}%
          </TextStyled>
        )}
      </AnimatedCircleProgress>

      {label && (
        <TextStyled
          textStyle="body"
          colorCategory="material"
          colorName="surface"
          colorVariant="80"
          className="mt-sm text-center">
          {label}
        </TextStyled>
      )}
    </Column>
  );
};

export default DonutStats;
