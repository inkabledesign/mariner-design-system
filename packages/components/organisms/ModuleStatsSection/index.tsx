import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Divider from '../../atoms/Divider';
import DonutStats from '../../atoms/DonutStats';
import PrimaryImage from '../../atoms/PrimaryImage';
import type { ModuleStatsSectionProps } from './index.types';

/**
 * ModuleStatsSection Component (Organism)
 *
 * A module stats card: optional header graphic, module title, and a list of
 * progress stat blocks (donut + completed/total). Presentational — all stats
 * are computed by the consumer and passed via props.
 * Source: mariner-edu organisms/ModuleStatsSection (simplified).
 *
 * @example
 * <ModuleStatsSection title="ColRegs" stats={[{ title: 'Lessons', percentage: 60, completed: 6, total: 10 }]} />
 */
const ModuleStatsSection = ({ title, imageUrl, stats, className = '' }: ModuleStatsSectionProps) => (
  <ViewStyled
    className={`bg-material-surface-0 dark:bg-material-surface-100 border border-brand-primary-20 dark:border-brand-primary-80 rounded-lg overflow-hidden ${className}`.trim()}
  >
    {imageUrl && <PrimaryImage source={{ uri: imageUrl }} aspectRatio="16:9" className="rounded-none" />}
    <Column className="gap-sm p-md">
      <TextStyled textStyle="heading5" className="text-material-surface-100 dark:text-material-surface-0">
        {title}
      </TextStyled>
      {stats.map((stat, index) => (
        <React.Fragment key={stat.title}>
          {index > 0 && <Divider className="bg-brand-primary-20 dark:bg-brand-primary-80" />}
          <Row className="items-center gap-md">
            <DonutStats percentage={stat.percentage} showPercentage />
            <Column className="flex-1 gap-xxs">
              <TextStyled textStyle="heading6" className="text-material-surface-100 dark:text-material-surface-0">
                {stat.title}
              </TextStyled>
              {stat.subtitle && (
                <TextStyled textStyle="footnote" className="text-material-surface-60">
                  {stat.subtitle}
                </TextStyled>
              )}
              <TextStyled textStyle="label" className="text-brand-primary-100">
                {stat.completed} of {stat.total} completed
              </TextStyled>
            </Column>
          </Row>
        </React.Fragment>
      ))}
    </Column>
  </ViewStyled>
);

export default ModuleStatsSection;
