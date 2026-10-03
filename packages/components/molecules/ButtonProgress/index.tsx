import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import ProgressBar from '../../atoms/ProgressBar';
import type { ButtonProgressProps } from './index.types';

const variantColors = {
  primary: {
    bg: 'bg-brand-primary-100 dark:bg-brand-primary-80',
    text: 'text-material-surface-0 dark:text-material-surface-100',
  },
  secondary: {
    bg: 'bg-material-surface-0 dark:bg-material-surface-100',
    text: 'text-brand-primary-100 dark:text-brand-primary-80',
  },
};

/**
 * ButtonProgress Component (Molecule)
 *
 * A button-sized download progress indicator: "Downloading" label, file
 * counter, percentage, and a progress bar.
 * Source: mariner-edu molecules/ButtonProgress (ported).
 *
 * @example
 * <ButtonProgress variant="secondary" percentage={42} totalFiles={20} downloadedFiles={8} />
 */
const ButtonProgress = ({
  variant = 'secondary',
  percentage,
  totalFiles,
  downloadedFiles,
  className = '',
}: ButtonProgressProps) => {
  const colors = variantColors[variant];

  return (
    <ViewStyled
      className={`${colors.bg} border border-brand-accent-100 dark:border-brand-accent-80 rounded-2xl flex-row items-center justify-center gap-md px-xl py-xs max-h-[56px] min-h-[56px] ${className}`.trim()}
    >
      <Column className="flex-1 gap-xxs justify-center">
        <Row className="justify-between">
          <Row className="gap-sm items-end">
            <TextStyled textStyle="footnote" className={colors.text}>
              Downloading
            </TextStyled>
            <TextStyled textStyle="label" className={colors.text}>
              {downloadedFiles ?? 0} / {totalFiles ?? 0} files
            </TextStyled>
          </Row>
          <TextStyled textStyle="footnote" className={colors.text}>
            {Math.round(percentage)}%
          </TextStyled>
        </Row>
        <ProgressBar style="accent" progress={percentage} className="w-full" />
      </Column>
    </ViewStyled>
  );
};

export default ButtonProgress;
