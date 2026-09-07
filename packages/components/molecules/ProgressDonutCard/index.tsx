import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import DonutStats from '../../atoms/DonutStats';
import Divider from '../../atoms/Divider';
import Icon from '../../atoms/Icon';
import Badge from '../Badge';
import type { ProgressDonutCardProps } from './index.types';

/**
 * ProgressDonutCard Component (Molecule)
 *
 * A progress card: icon + title + subtitle, a donut chart, a completed/total
 * split, optional attempts row, and an optional average-score column with a
 * score badge. Optional `children` slot for detailed breakdowns.
 * Source: mariner-edu molecules/ProgressDonutCard (simplified: score
 * thresholds and module-activity detail → scoreLabel/scoreVariant props and a
 * children slot).
 *
 * @example
 * <ProgressDonutCard title="Lessons" percentage={60} completed={6} total={10} type="lessons" />
 */
const ProgressDonutCard = ({
  title,
  percentage,
  completed,
  total,
  subtitle,
  type = 'lessons',
  totalAttempts,
  avgScorePercent,
  scoreLabel,
  scoreVariant,
  children,
  className = '',
}: ProgressDonutCardProps) => (
  <ViewStyled
    className={`bg-material-surface-0 dark:bg-material-surface-80 border border-brand-primary-10 dark:border-brand-primary-80 rounded-md p-md ${className}`.trim()}
  >
    <Row className="gap-md justify-between w-full">
      <Column className="gap-xs items-start flex-1">
        <Row className="gap-md">
          <Icon
            className="w-xxl h-xxl"
            iconName={type === 'lessons' ? 'ico-learn-book' : 'ico-quizz'}
            color="text-brand-primary-100"
          />
          <Column className="gap-xs flex-1">
            <TextStyled textStyle="heading6" className="text-left text-material-surface-100">
              {title}
            </TextStyled>
            {subtitle && (
              <TextStyled textStyle="caption" className="text-left text-material-surface-80">
                {subtitle}
              </TextStyled>
            )}
          </Column>
          <Row className="items-center py-xs">
            <DonutStats percentage={percentage} size={64} strokeWidth={6} />
          </Row>
        </Row>
        <Divider type="horizontal" className="bg-brand-primary-10 dark:bg-brand-primary-40" />
        <Row className="justify-between items-center gap-md flex-1 w-full pl-xxl">
          <Column className="flex-1">
            <Row className="flex-1 w-full justify-between items-center gap-md">
              <Column className="flex-1 w-full justify-center items-center py-xs">
                <TextStyled
                  textStyle="heading3"
                  fontWeight="700"
                  className="text-material-surface-100"
                >
                  {completed}
                </TextStyled>
                <TextStyled
                  textStyle="caption"
                  fontWeight="500"
                  className="text-material-surface-100"
                >
                  {type === 'lessons' ? 'Completed' : 'Passed'}
                </TextStyled>
              </Column>
              <Divider type="vertical" className="bg-brand-primary-10 dark:bg-brand-primary-40" />
              <Column className="flex-1 w-full justify-center items-center py-xs">
                <TextStyled
                  textStyle="heading3"
                  fontWeight="700"
                  className="text-material-surface-100"
                >
                  {total}
                </TextStyled>
                <TextStyled
                  textStyle="caption"
                  fontWeight="500"
                  className="text-material-surface-100"
                >
                  Total
                </TextStyled>
              </Column>
            </Row>
            {totalAttempts != null && totalAttempts > 0 && (
              <Column>
                <Divider type="horizontal" className="bg-brand-primary-10" />
                <Row className="justify-between py-xs px-sm">
                  <TextStyled
                    textStyle="caption"
                    fontWeight="500"
                    className="text-material-surface-100"
                  >
                    Attempts:
                  </TextStyled>
                  <TextStyled textStyle="heading5" className="text-material-surface-100">
                    {totalAttempts}
                  </TextStyled>
                </Row>
              </Column>
            )}
          </Column>
          {avgScorePercent != null && !isNaN(avgScorePercent) && (
            <>
              <Divider type="vertical" className="bg-brand-primary-10" />
              <Row className="justify-center items-center w-[40%]">
                <Column className="gap-xs justify-center items-center">
                  <Column className="items-center justify-center">
                    <TextStyled textStyle="heading2" className="text-material-surface-100">
                      {avgScorePercent}%
                    </TextStyled>
                    <TextStyled
                      textStyle="caption"
                      fontWeight="500"
                      className="text-material-surface-100"
                    >
                      Avg. Score
                    </TextStyled>
                  </Column>
                  {scoreLabel && <Badge size="sm" label={scoreLabel} variant={scoreVariant} />}
                </Column>
              </Row>
            </>
          )}
        </Row>
      </Column>
    </Row>
    {children && (
      <Row className="flex-1 w-full justify-center items-center pt-xl">{children}</Row>
    )}
  </ViewStyled>
);

export default ProgressDonutCard;
