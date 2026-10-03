import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import type { TextContentBlockProps, TextContentBlockVariant } from './index.types';

const variantColors: Record<
  TextContentBlockVariant,
  { warning: string; border: string; bg: string; text: string; call: string }
> = {
  mayday: {
    warning: 'text-system-error-100',
    border: 'border-system-error-100',
    bg: 'bg-material-surface-0',
    text: 'text-material-surface-100',
    call: 'text-material-surface-100',
  },
  panpan: {
    warning: 'text-system-warning-100',
    border: 'border-system-warning-100',
    bg: 'bg-material-surface-80',
    text: 'text-material-surface-0',
    call: 'text-material-surface-0',
  },
  securite: {
    warning: 'text-brand-primary-100',
    border: 'border-brand-primary-100',
    bg: 'bg-material-surface-0',
    text: 'text-material-surface-100',
    call: 'text-brand-primary-100',
  },
  default: {
    warning: 'text-system-error-100',
    border: 'border-material-surface-20',
    bg: 'bg-material-surface-0',
    text: 'text-material-surface-100',
    call: 'text-material-surface-100',
  },
};

/**
 * TextContentBlock Component (Molecule)
 *
 * A formatted content block for distress/emergency procedures: warning banner,
 * numbered steps, and an optional script text block.
 * Source: mariner-edu molecules/TextContentBlock (ported — color maps
 * normalised to token classes).
 *
 * @example
 * <TextContentBlock
 *   warningText="ONLY TO BE USED IN EMERGENCY"
 *   variant="mayday"
 *   steps={['Ensure radio is switched on.', 'Open the RED distress button cover.']}
 *   scriptText="MAYDAY, MAYDAY, MAYDAY…"
 * />
 */
const TextContentBlock = ({
  warningText,
  steps,
  scriptText,
  variant = 'default',
  className = '',
}: TextContentBlockProps) => {
  const colors = variantColors[variant];

  return (
    <ViewStyled
      className={`${colors.bg} ${colors.border} border rounded-lg p-md shadow-xs ${className}`.trim()}
    >
      <Column className="gap-xxl">
        {warningText && (
          <Row
            className={`items-center justify-center px-md py-md rounded-md ${colors.bg} ${colors.border}`}
          >
            <TextStyled textStyle="heading5" className={`${colors.warning} text-center`}>
              {warningText}
            </TextStyled>
          </Row>
        )}

        <Column className="gap-0 px-md">
          {steps.map((step, index) => (
            <Row key={index} className="items-start">
              <TextStyled textStyle="heading6" className={colors.text}>
                {index + 1}.{' '}
              </TextStyled>
              <TextStyled textStyle="body" className={`${colors.text} flex-1`}>
                {step}
              </TextStyled>
            </Row>
          ))}
        </Column>

        {scriptText && (
          <Column className={`${colors.border} rounded-md px-md py-sm items-start justify-start`}>
            {scriptText.split('\n').map((line, index) => {
              const pTagMatch = line.match(/<p>(.*?)<\/p>/);
              if (pTagMatch) {
                return (
                  <TextStyled key={index} textStyle="body" className={colors.call}>
                    {pTagMatch[1]}
                  </TextStyled>
                );
              }
              if (line.trim()) {
                return (
                  <TextStyled key={index} textStyle="heading5" className={colors.call}>
                    {line}
                  </TextStyled>
                );
              }
              return null;
            })}
          </Column>
        )}
      </Column>
    </ViewStyled>
  );
};

export default TextContentBlock;
