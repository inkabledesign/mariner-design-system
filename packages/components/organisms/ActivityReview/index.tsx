import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Button from '../../molecules/Button';
import CardInfo from '../../molecules/CardInfo';
import type { ActivityReviewProps } from './index.types';

/**
 * ActivityReview Component (Organism)
 *
 * Activity progress history: summary card (best/latest/attempts), attempt
 * selector, selected attempt details, and a retry action.
 * Presentational — selection is controlled via props.
 * Source: mariner-edu organisms/ActivityReview (simplified: internal state →
 * controlled selectedAttemptIndex/onSelectAttempt props).
 *
 * @example
 * <ActivityReview activityTitle="Quiz" attempts={attempts} selectedAttemptIndex={0} onSelectAttempt={fn} />
 */
const ActivityReview = ({
  activityTitle,
  isCompleted = false,
  bestScore,
  latestScore,
  attempts,
  selectedAttemptIndex,
  onSelectAttempt,
  onRetry,
  className = '',
}: ActivityReviewProps) => {
  if (attempts.length === 0) {
    return (
      <Column className={`gap-md p-md ${className}`.trim()}>
        <CardInfo
          type="info"
          title="No attempts yet"
          body="Complete the activity to see your progress."
        />
        {onRetry && <Button text="Start Activity" variant="primary" onPress={onRetry} />}
      </Column>
    );
  }

  const selectedIndex = selectedAttemptIndex ?? attempts.length - 1;
  const selectedAttempt = attempts[selectedIndex];
  const hasMultipleAttempts = attempts.length > 1;

  return (
    <Column className={`gap-md ${className}`.trim()}>
      {/* Summary Card */}
      <ViewStyled className="p-md rounded-md border border-brand-primary-20 bg-material-surface-0">
        <Column className="gap-sm">
          <Row className="justify-between items-center">
            <TextStyled textStyle="heading4" className="text-brand-primary-100">
              {activityTitle}
            </TextStyled>
            {isCompleted && (
              <ViewStyled className="px-sm py-xs rounded-full bg-system-success-10">
                <TextStyled textStyle="caption" className="text-system-success-100">
                  Completed
                </TextStyled>
              </ViewStyled>
            )}
          </Row>
          <Row className="gap-lg">
            <Column className="gap-xs">
              <TextStyled textStyle="caption" className="text-material-surface-60">
                Best Score
              </TextStyled>
              <TextStyled textStyle="heading3" className="text-brand-accent-100">
                {bestScore ?? 0}%
              </TextStyled>
            </Column>
            <Column className="gap-xs">
              <TextStyled textStyle="caption" className="text-material-surface-60">
                Latest Score
              </TextStyled>
              <TextStyled textStyle="heading3" className="text-brand-primary-100">
                {latestScore ?? 0}%
              </TextStyled>
            </Column>
            <Column className="gap-xs">
              <TextStyled textStyle="caption" className="text-material-surface-60">
                Attempts
              </TextStyled>
              <TextStyled textStyle="heading3" className="text-material-surface-100">
                {attempts.length}
              </TextStyled>
            </Column>
          </Row>
        </Column>
      </ViewStyled>

      {/* Attempt Selector */}
      {hasMultipleAttempts && (
        <Column className="gap-sm">
          <TextStyled textStyle="label" className="text-brand-primary-100">
            Review Attempts
          </TextStyled>
          <Row className="gap-xs flex-wrap">
            {attempts.map((attempt, index) => (
              <Button
                key={attempt.attemptNumber}
                text={`#${attempt.attemptNumber}`}
                variant={index === selectedIndex ? 'primary' : 'secondary'}
                onPress={() => onSelectAttempt?.(index)}
              />
            ))}
          </Row>
        </Column>
      )}

      {/* Selected Attempt Details */}
      {selectedAttempt && (
        <ViewStyled className="p-md rounded-md border border-brand-primary-20">
          <Column className="gap-md">
            <Row className="justify-between items-center">
              <TextStyled textStyle="heading5" className="text-brand-primary-100">
                Attempt #{selectedAttempt.attemptNumber}
              </TextStyled>
              <ViewStyled
                className={`px-sm py-xs rounded-full ${
                  selectedAttempt.isCorrect ? 'bg-system-success-10' : 'bg-system-error-5'
                }`}
              >
                <TextStyled
                  textStyle="caption"
                  className={
                    selectedAttempt.isCorrect ? 'text-system-success-100' : 'text-system-error-100'
                  }
                >
                  {selectedAttempt.score}%
                </TextStyled>
              </ViewStyled>
            </Row>
            <Row className="gap-md">
              {selectedAttempt.completedAt && (
                <Column className="gap-xs">
                  <TextStyled textStyle="caption" className="text-material-surface-60">
                    Completed
                  </TextStyled>
                  <TextStyled textStyle="body" className="text-material-surface-100">
                    {selectedAttempt.completedAt}
                  </TextStyled>
                </Column>
              )}
              {selectedAttempt.timeSpentSeconds !== undefined && (
                <Column className="gap-xs">
                  <TextStyled textStyle="caption" className="text-material-surface-60">
                    Time Spent
                  </TextStyled>
                  <TextStyled textStyle="body" className="text-material-surface-100">
                    {Math.floor(selectedAttempt.timeSpentSeconds / 60)}m{' '}
                    {selectedAttempt.timeSpentSeconds % 60}s
                  </TextStyled>
                </Column>
              )}
            </Row>
            {selectedAttempt.answersCount !== undefined && (
              <Column className="gap-xs">
                <TextStyled textStyle="caption" className="text-material-surface-60">
                  Your Answers
                </TextStyled>
                <ViewStyled className="p-sm rounded-sm bg-material-surface-0">
                  <TextStyled textStyle="caption" className="text-material-surface-80">
                    {selectedAttempt.answersCount} answer(s) submitted
                  </TextStyled>
                </ViewStyled>
              </Column>
            )}
          </Column>
        </ViewStyled>
      )}

      {/* Actions */}
      {onRetry && (
        <Column className="gap-sm">
          <Button
            text="Try Again"
            variant="primary"
            onPress={onRetry}
            iconPosition="right"
            iconName="ico-chevron-right"
          />
          {!isCompleted && (
            <CardInfo
              type="info"
              body="Complete this activity successfully to unlock the next one."
            />
          )}
        </Column>
      )}
    </Column>
  );
};

export default ActivityReview;
