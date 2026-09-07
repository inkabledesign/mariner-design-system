import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import StepNumber from '../../atoms/StepNumber';
import type { OnboardingStepsProps } from './index.types';

/**
 * OnboardingSteps Component (Molecule)
 *
 * An onboarding step indicator: a thin accent rail with StepNumber badges —
 * the current step uses the active accent style.
 * Source: Mariner-Library / Molecules / Header/Elements/OnboardingSteps (Figma).
 *
 * @example
 * <OnboardingSteps totalSteps={3} currentStep={1} />
 */
const OnboardingSteps = ({ totalSteps, currentStep = 1, className = '' }: OnboardingStepsProps) => (
  <Row className={`items-center gap-sm ${className}`.trim()}>
    <ViewStyled className="absolute left-0 right-0 h-px bg-brand-accent-100" />
    {Array.from({ length: totalSteps }).map((_, index) => (
      <StepNumber key={index} number={index + 1} active={index + 1 === currentStep} />
    ))}
  </Row>
);

export default OnboardingSteps;
