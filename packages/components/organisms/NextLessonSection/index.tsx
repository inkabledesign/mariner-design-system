import React from 'react';
import { ActivityIndicator } from 'react-native';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Badge from '../../molecules/Badge';
import ProgressBar from '../../atoms/ProgressBar';
import PrimaryImage from '../../atoms/PrimaryImage';
import PressableStyled from '../../atoms/PressableStyled';
import { theme } from '@inkabledesign/mariner-theme';
import type { NextLessonSectionProps } from './index.types';

/**
 * NextLessonSection Component (Organism)
 *
 * Shows the user's next recommended lesson: title, module/chapter context,
 * progress bar, and an update/completed badge. Presentational — data and
 * navigation come via props.
 * Source: mariner-edu organisms/NextLessonSection (simplified).
 *
 * @example
 * <NextLessonSection nextLesson={{ lessonTitle: 'Phonetic alphabet', progress: 60 }} onLessonPress={fn} />
 */
const NextLessonSection = ({
  title = 'Your next lesson',
  nextLesson,
  isLoading = false,
  emptyHeadline,
  emptySubHeadline,
  onLessonPress,
  className = '',
}: NextLessonSectionProps) => (
  <Column className={`gap-sm ${className}`.trim()}>
    <ViewStyled className="px-sm">
      <TextStyled textStyle="heading5" className="text-material-surface-100">
        {title}
      </TextStyled>
    </ViewStyled>
    {isLoading ? (
      <ViewStyled className="px-md py-lg items-center justify-center">
        <ActivityIndicator size="large" color={theme.color.light.brand.primary['100']} />
      </ViewStyled>
    ) : !nextLesson ? (
      <Column className="mx-md gap-xs rounded-lg bg-brand-primary-100 p-md">
        <TextStyled textStyle="heading6" className="text-material-surface-0">
          {emptyHeadline ?? 'Get started with free lessons and quizzes'}
        </TextStyled>
        {emptySubHeadline && (
          <TextStyled textStyle="footnote" className="text-material-surface-0">
            {emptySubHeadline}
          </TextStyled>
        )}
      </Column>
    ) : (
      <ViewStyled className="px-md">
        <PressableStyled onPress={onLessonPress}>
          <Column className="rounded-md bg-material-surface-0 border border-brand-primary-20 overflow-hidden">
            {nextLesson.imageUrl && (
              <PrimaryImage
                source={{ uri: nextLesson.imageUrl }}
                aspectRatio="16:9"
                className="rounded-none"
              />
            )}
            <Column className="gap-xxs p-md">
              <Row className="items-center justify-between">
                <TextStyled textStyle="heading6" className="flex-1 text-material-surface-100">
                  {nextLesson.lessonTitle}
                </TextStyled>
                {nextLesson.hasUpdate && <Badge label="Updated" variant="warning" size="sm" />}
                {nextLesson.isCompleted && <Badge label="Completed" variant="success" size="sm" />}
              </Row>
              {(nextLesson.chapterTitle || nextLesson.moduleTitle) && (
                <TextStyled textStyle="footnote" className="text-material-surface-60">
                  {[nextLesson.chapterTitle, nextLesson.moduleTitle].filter(Boolean).join(' · ')}
                </TextStyled>
              )}
              {nextLesson.totalLessons !== undefined && (
                <TextStyled textStyle="label" className="text-brand-primary-100">
                  {nextLesson.totalLessons} lessons
                </TextStyled>
              )}
              <ProgressBar progress={nextLesson.progress} style="primary" height={4} />
            </Column>
          </Column>
        </PressableStyled>
      </ViewStyled>
    )}
  </Column>
);

export default NextLessonSection;
