import React, { useState } from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import Icon from '../../atoms/Icon';
import Button from '../Button';
import ButtonNumber from '../ButtonNumber';
import type { ActivityVHFScenarioProps } from './index.types';

const isOrderCorrect = (expected: string[], actual: string[]) =>
  expected.length === actual.length && expected.every((s, i) => s === actual[i]);

/**
 * ActivityVHFScenario Component (Molecule)
 *
 * A step-ordering activity where the sequence is entered via an external VHF
 * emulator. The consumer owns the emulator — it supplies tracked steps via
 * `emulatorSteps` and receives the launch intent via `onLaunchEmulator`.
 * Source: mariner-edu molecules/ActivityVHFScenario (simplified: VHF emulator
 * store + router/focus hooks → emulatorSteps/onLaunchEmulator props).
 *
 * @example
 * <ActivityVHFScenario steps={proc} emulatorSteps={tracked} onLaunchEmulator={open} onComplete={fn} />
 */
const ActivityVHFScenario = ({
  description,
  steps,
  explanation,
  emulatorSteps = [],
  onLaunchEmulator,
  asset,
  onComplete,
  totalActivities = 1,
  currentQuestionIndex = 0,
  className = '',
}: ActivityVHFScenarioProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const isCorrect = isSubmitted && isOrderCorrect(steps, emulatorSteps);
  const hasEnoughSteps = emulatorSteps.length === steps.length;

  const handleSubmit = () => {
    if (!hasEnoughSteps) return;
    setIsSubmitted(true);
    setShowExplanation(true);
    onComplete?.({ answers: emulatorSteps, score: isOrderCorrect(steps, emulatorSteps) ? 100 : 0, isCorrect: isOrderCorrect(steps, emulatorSteps) });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  const labelText =
    emulatorSteps.length === 0
      ? 'Open the VHF emulator and enter the steps in the correct order'
      : emulatorSteps.length > steps.length
        ? 'Too many steps. Delete some steps or reset the activity and start again.'
        : emulatorSteps.length < steps.length
          ? 'Too few steps. Reset the activity and start again.'
          : 'Your completed sequence';

  return (
    <Column className={`gap-md ${className}`.trim()}>
      <Column className="gap-md">
        <Row className="justify-between items-center">
          <TextStyled textStyle="label" className="text-brand-primary-100">
            Scenario VHF emulator
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
          {labelText}
        </TextStyled>
      </Column>

      {onLaunchEmulator && !isSubmitted && (
        <Button text="Open VHF Emulator" variant="secondary" onPress={onLaunchEmulator} />
      )}

      <Column className="gap-sm">
        <TextStyled textStyle="footnote" className="text-material-surface-100">
          Your sequence {emulatorSteps.length} | {steps.length}
        </TextStyled>
        {emulatorSteps.length === 0 ? (
          <ViewStyled className="p-lg border border-dashed border-brand-primary-60 rounded-sm items-center">
            <TextStyled textStyle="body" className="text-brand-primary-80">
              Steps entered on the emulator appear here
            </TextStyled>
          </ViewStyled>
        ) : (
          <Column className="gap-xs">
            {emulatorSteps.map((step, index) => {
              const stepState = isSubmitted
                ? step === steps[index]
                  ? 'success'
                  : 'error'
                : 'active';
              return (
                <ViewStyled
                  key={`step-${index}`}
                  className={`p-md rounded-sm border ${
                    isSubmitted
                      ? stepState === 'success'
                        ? 'border-system-success-100 bg-system-success-5'
                        : 'border-system-error-100 bg-system-error-5'
                      : 'border-brand-accent-100 bg-brand-accent-alpha-5'
                  }`}
                >
                  <Row className="items-center gap-sm">
                    <ButtonNumber number={index + 1} state={stepState} />
                    <TextStyled textStyle="body" className="flex-1 text-material-surface-60">
                      {step}
                    </TextStyled>
                    {isSubmitted && (
                      <Icon
                        iconName={stepState === 'success' ? 'ico-tick-round' : 'ico-close-round'}
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
          <Button text="Submit Sequence" variant="primary" onPress={handleSubmit} className="flex-1" />
          <Button text="Reset" variant="text" onPress={handleReset} />
        </Column>
      )}
    </Column>
  );
};

export default ActivityVHFScenario;
