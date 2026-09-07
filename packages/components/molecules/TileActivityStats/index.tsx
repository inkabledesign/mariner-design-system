import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { TileActivityStatsProps } from './index.types';

/**
 * TileActivityStats Component (Molecule)
 *
 * A per-chapter/per-lesson activity breakdown: lesson completion ticks and
 * per-activity attempts, best and latest scores. Presentational — progress
 * data is resolved by the consumer into the `chapters` prop.
 * Source: mariner-edu molecules/TileActivityStats (simplified: store lookups
 * removed → typed chapters/lessons/activities props).
 *
 * @example
 * <TileActivityStats chapters={[{ chapterTitle: 'Ch 1', lessons: [...] }]} />
 */
const TileActivityStats = ({ chapters, className = '' }: TileActivityStatsProps) => (
  <Column className={`gap-sm mt-sm pt-sm border-t border-brand-primary-10 ${className}`.trim()}>
    {chapters.map(chapter => (
      <Column key={chapter.chapterTitle} className="gap-xs">
        <TextStyled textStyle="footnote" className="text-brand-primary-100">
          {chapter.chapterTitle}
        </TextStyled>
        {chapter.lessons.map(lesson => (
          <Column key={lesson.lessonTitle} className="gap-xs pl-sm">
            <Row className="justify-between items-center min-h-[32px]">
              <TextStyled textStyle="caption" className="text-material-surface-80">
                {lesson.lessonTitle}
              </TextStyled>
              {lesson.isCompleted && (
                <ViewStyled className="rounded-full bg-brand-primary-100">
                  <Icon iconName="ico-tick-round" color="text-material-surface-0" />
                </ViewStyled>
              )}
            </Row>
            {lesson.activities.map(activity => (
              <Row key={activity.title} className="justify-between items-center pl-sm">
                <Column className="flex-1">
                  <TextStyled textStyle="caption" className="text-material-surface-60">
                    {activity.title}
                  </TextStyled>
                  <TextStyled textStyle="caption" className="text-material-surface-40">
                    {activity.totalAttempts} {activity.totalAttempts === 1 ? 'attempt' : 'attempts'}
                  </TextStyled>
                </Column>
                {activity.totalAttempts > 0 && (
                  <Column className="items-end gap-xs">
                    <Row className="gap-xs">
                      {activity.bestScore !== undefined && (
                        <TextStyled textStyle="caption" className="text-brand-accent-100">
                          Best: {activity.bestScore}%
                        </TextStyled>
                      )}
                      {activity.latestScore !== undefined && (
                        <TextStyled textStyle="caption" className="text-material-surface-60">
                          Latest: {activity.latestScore}%
                        </TextStyled>
                      )}
                    </Row>
                  </Column>
                )}
              </Row>
            ))}
          </Column>
        ))}
      </Column>
    ))}
  </Column>
);

export default TileActivityStats;
