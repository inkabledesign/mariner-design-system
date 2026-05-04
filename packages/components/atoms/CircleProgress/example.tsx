import React, { useState, useEffect } from 'react';
import Row from '../Row';
import Column from '../Column';
import TextStyled from '../TextStyled';
import Icon from '../Icon';
import CircleProgress from './index';

/**
 * Example usage of CircleProgress component
 * Demonstrates various configurations and use cases
 */
const CircleProgressExample = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Animate progress from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Column className="gap-xl p-lg bg-material-surface-5">
      {/* Example 1: Basic progress circles */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" colorCategory="material" colorName="surface" colorVariant="100">
          Basic Progress Circles
        </TextStyled>
        <Row className="gap-md">
          <CircleProgress progress={0} size={32} strokeWidth={2} />
          <CircleProgress progress={25} size={32} strokeWidth={2} />
          <CircleProgress progress={50} size={32} strokeWidth={2} />
          <CircleProgress progress={75} size={32} strokeWidth={2} />
          <CircleProgress progress={100} size={32} strokeWidth={2} />
        </Row>
      </Column>

      {/* Example 2: Different sizes */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" colorCategory="material" colorName="surface" colorVariant="100">
          Different Sizes
        </TextStyled>
        <Row className="gap-md items-center">
          <CircleProgress progress={75} size={20} strokeWidth={2} />
          <CircleProgress progress={75} size={28} strokeWidth={2} />
          <CircleProgress progress={75} size={36} strokeWidth={2} />
          <CircleProgress progress={75} size={48} strokeWidth={3} />
          <CircleProgress progress={75} size={64} strokeWidth={4} />
        </Row>
      </Column>

      {/* Example 3: With icons in center */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" colorCategory="material" colorName="surface" colorVariant="100">
          With Icons
        </TextStyled>
        <Row className="gap-md">
          <CircleProgress progress={30} size={36} strokeWidth={2}>
            <Icon iconType="input" iconName="ico-berth-round" className="w-6 h-6" color="text-brand-primary-100" />
          </CircleProgress>
          <CircleProgress progress={60} size={36} strokeWidth={2}>
            <Icon iconType="ui" iconName="ico-success" className="w-6 h-6" color="text-brand-accent-100" />
          </CircleProgress>
          <CircleProgress progress={90} size={36} strokeWidth={2}>
            <Icon iconType="nav" iconName="ico-close-round" className="w-6 h-6" color="text-system-error-100" />
          </CircleProgress>
        </Row>
      </Column>

      {/* Example 4: Different colors */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" colorCategory="material" colorName="surface" colorVariant="100">
          Different Colors
        </TextStyled>
        <Row className="gap-md">
          <CircleProgress 
            progress={75} 
            size={32} 
            strokeWidth={2}
            progressColor="text-brand-primary-100"
            railColor="text-brand-primary-20"
          />
          <CircleProgress 
            progress={75} 
            size={32} 
            strokeWidth={2}
            progressColor="text-brand-accent-100"
            railColor="text-brand-accent-20"
          />
          <CircleProgress 
            progress={75} 
            size={32} 
            strokeWidth={2}
            progressColor="text-system-success"
            railColor="text-material-surface-20"
          />
          <CircleProgress 
            progress={75} 
            size={32} 
            strokeWidth={2}
            progressColor="text-system-error-100"
            railColor="text-system-error-20"
          />
        </Row>
      </Column>

      {/* Example 5: Animated progress */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" colorCategory="material" colorName="surface" colorVariant="100">
          Animated Progress: {animatedProgress}%
        </TextStyled>
        <Row className="gap-md">
          <CircleProgress progress={animatedProgress} size={48} strokeWidth={3} />
          <CircleProgress progress={animatedProgress} size={48} strokeWidth={3}>
            <TextStyled 
              textStyle="label" 
              colorCategory="brand" 
              colorName="primary" 
              colorVariant="100"
            >
              {animatedProgress}%
            </TextStyled>
          </CircleProgress>
        </Row>
      </Column>

      {/* Example 6: Different stroke widths */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" colorCategory="material" colorName="surface" colorVariant="100">
          Different Stroke Widths
        </TextStyled>
        <Row className="gap-md">
          <CircleProgress progress={75} size={36} strokeWidth={1} />
          <CircleProgress progress={75} size={36} strokeWidth={2} />
          <CircleProgress progress={75} size={36} strokeWidth={3} />
          <CircleProgress progress={75} size={36} strokeWidth={4} />
          <CircleProgress progress={75} size={36} strokeWidth={6} />
        </Row>
      </Column>
    </Column>
  );
};

export default CircleProgressExample;
