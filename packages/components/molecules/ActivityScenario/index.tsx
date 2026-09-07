import React, { useMemo, useState } from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import Icon from '../../atoms/Icon';
import Button from '../Button';
import ButtonNumber from '../ButtonNumber';
import type { ActivityScenarioProps } from './index.types';

const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const isOrderCorrect = (expected: string[], actual: string[]) =>
  expected.length === actual.length && expected.every((s, i) => s === actual[i]);

/**
 * ActivityScenario Component (Molecule)
 *
 * A step-ordering activity: the user taps available steps to build a sequence,
 * then submits it for correct/incorrect feedback. Interaction state is a view
 * concern; the result is reported via `onComplete`.
 * Source: mariner-edu molecules/ActivityScenario (simplified: Sanity checker →
 * inline order comparison; TileInfo → inline feedback banner).
 *
 * @example
 * <ActivityScenario steps={['Step 1', 'Step 2']} explanation="…" onComplete={fn} />
 */
const ActivityScenario = ({
  description,
  steps,
  explanation,
  asset,
  onComplete,
  totalActivities = 1,
  currentQuestionIndex = 0,
  className = '',
}: ActivityScenarioProps) => {
  const initialAvailable = useMemo(() => shuffle(steps), [steps]);
  const [userSteps, setUserSteps] = useState<string[]>([]);
  const [availableSteps, setAvailableSteps] = useState<string[]>(initialAvailable);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAddStep = (step: string) => {
    if (isSubmitted) return;
    setUserSteps(prev => [...prev, step]);
    setAvailableSteps(prev => prev.filter(s => s !== step));
  };

  const handleRemoveStep = (step: string, index: number) => {
    if (isSubmitted) return;
    setUserSteps(prev => prev.filter((_, i) => i !== index));
    setAvailableSteps(prev => [...prev, step]);
  };

  const handleReset = () => {
    setUserSteps([]);
    setAvailableSteps(shuffle(steps));
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  const handleSubmit = () => {
    if (userSteps.length !== steps.length) return;
    const isCorrect = isOrderCorrect(steps, userSteps);
    setIsSubmitted(true);
    setShowExplanation(true);
    onComplete?.({ answers: userSteps, score: isCorrect ? 100 : 0, isCorrect });
  };

  const isCorrect = isSubmitted && isOrderCorrect(steps, userSteps);
  const hasEnoughSteps = userSteps.length === steps.length;

  const getStepState = (step: string, index: number): 'success' | 'error' =>
    step === steps[index] ? 'success' : 'error';

  return (
    <Column className={`gap-md ${className}`.trim()}>
      <Column className="gap-md">
        <Row className="justify-between items-center">
          <TextStyled textStyle="label" className="text-brand-primary-100">
            Scenario
          </TextStyled>
          <TextStyled textStyle="label" className="text-material-surface-100">
            Question {currentQuestionIndex + 1} of {totalActivities}
          </TextStyled>
        </Row>
        {asset}
        {description && (
          <TextStyled textStyle="body" fontWeight="500" className="mb-sm text-material-surface-100">
            {description}
          </TextStyled>
        )}
        <TextStyled textStyle="caption" className="text-brand-primary-100">
          Arrange the steps in the correct order
        </TextStyled>
      </Column>

      <Column className="gap-sm">
        <TextStyled textStyle="footnote" className="text-material-surface-100">
          Your sequence {userSteps.length} | {steps.length}
        </TextStyled>
        {userSteps.length === 0 ? (
          <ViewStyled className="p-lg border border-dashed border-brand-primary-60 rounded-sm items-center">
            <TextStyled textStyle="body" className="text-brand-primary-80">
              Tap steps below to add them here
            </TextStyled>
          </ViewStyled>
        ) : (
          <Column className="gap-xs">
            {userSteps.map((step, index) => {
              const stepState = isSubmitted ? getStepState(step, index) : 'active';
              return (
                <ViewStyled
                  key={`user-${index}`}
                  className={`p-md rounded-sm border ${
                    isSubmitted
                      ? stepState === 'success'
                        ? 'border-system-success-100 bg-system-success-5'
                        : 'border-system-error-100 bg-system-error-5'
                      : 'border-brand-accent-100 bg-brand-accent-alpha-5'
                  }`}
                >
                  <Row className="items-center gap-sm">
                    <ButtonNumber
                      number={index + 1}
                      state={isSubmitted ? stepState : 'active'}
                    />
                    <TextStyled
                      textStyle="body"
                      className="flex-1 text-material-surface-60"
                    >
                      {step}
                    </TextStyled>
                    {!isSubmitted ? (
                      <PressableStyled onPress={() => handleRemoveStep(step, index)}>
                        <Icon
                          iconName="ico-trash"
                          color="text-material-surface-60"
                          className="w-6 h-6"
                        />
                      </PressableStyled>
                    ) : (
                      <Icon
                        iconName={
                          stepState === 'success' ? 'ico-tick-round' : 'ico-close-round'
                        }
                        color={
                          stepState === 'success'
                            ? 'text-system-success-100'
                            : 'text-system-error-100'
                        }
                        className="w-6 h-6"
                      />
                    )}
                  </Row>
                </ViewStyled>
              );
            })}
          </Column>
        )}
      </Column>

      {availableSteps.length > 0 && !isSubmitted && (
        <Column className="gap-sm">
          <TextStyled textStyle="footnote" className="text-material-surface-100">
            Available Steps
          </TextStyled>
          <Column className="gap-xs">
            {availableSteps.map((step, index) => (
              <PressableStyled key={`available-${index}`} onPress={() => handleAddStep(step)}>
                <ViewStyled className="p-md rounded-sm border border-brand-primary-20 bg-material-surface-0">
                  <Row className="items-center gap-md">
                    <ViewStyled className="w-6 h-6 rounded-full border border-brand-primary-60" />
                    <TextStyled textStyle="body" className="flex-1 text-material-surface-60">
                      {step}
                    </TextStyled>
                  </Row>
                </ViewStyled>
              </PressableStyled>
            ))}
          </Column>
        </Column>
      )}

      {showExplanation && explanation && (
        <Row
          className={`items-start gap-sm rounded-md border p-md ${
            isCorrect
              ? 'border-system-success-100 bg-system-success-5'
              : 'border-system-error-100 bg-system-error-5'
          }`}
        >
          <Icon
            iconName={isCorrect ? 'ico-tick-round' : 'ico-close-round'}
            color={isCorrect ? 'text-system-success-100' : 'text-system-error-100'}
            className="w-5 h-5"
          />
          <TextStyled textStyle="footnote" className="flex-1 text-material-surface-100">
            {explanation}
          </TextStyled>
        </Row>
      )}

      {!isSubmitted && hasEnoughSteps && (
        <Column className="gap-sm mt-md">
          <Button
            text="Submit Sequence"
            variant="primary"
            onPress={handleSubmit}
            className="flex-1"
          />
          <Button
            text="Reset"
            variant="text"
            onPress={handleReset}
            disabled={userSteps.length === 0}
          />
        </Column>
      )}
    </Column>
  );
};

export default ActivityScenario;
