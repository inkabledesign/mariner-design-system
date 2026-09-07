import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { EssentialToolsSectionProps } from './index.types';

/**
 * EssentialToolsSection Component (Organism)
 *
 * A titled 2-column grid of tool cards (icon + title + description).
 * Presentational — navigation is passed via each tool's onPress.
 * Source: mariner-edu organisms/EssentialToolsSection (simplified — CardTool
 * inlined as an icon card; SectionTitle → TextStyled heading5).
 *
 * @example
 * <EssentialToolsSection tools={[{ id: '1', iconName: 'ico-clock', title: 'Distress procedures' }]} />
 */
const EssentialToolsSection = ({
  tools,
  title = 'Essential tools',
  className = '',
}: EssentialToolsSectionProps) => (
  <Column className={`gap-sm ${className}`.trim()}>
    {title && (
      <ViewStyled className="px-sm">
        <TextStyled textStyle="heading5" className="text-material-surface-100">
          {title}
        </TextStyled>
      </ViewStyled>
    )}
    <ViewStyled className="px-md">
      <Row className="flex-wrap -mx-xs">
        {tools.map(tool => (
          <ViewStyled key={tool.id} className="w-1/2 px-xs pb-md">
            <PressableStyled onPress={tool.onPress}>
              <Column className="gap-xs rounded-md bg-material-surface-0 border border-brand-accent-20 p-md">
                <Icon iconName={tool.iconName} color="text-brand-primary-100" className="w-12 h-12" />
                <TextStyled textStyle="heading6" className="text-material-surface-100">
                  {tool.title}
                </TextStyled>
                {tool.description && (
                  <TextStyled textStyle="footnote" className="text-material-surface-60">
                    {tool.description}
                  </TextStyled>
                )}
              </Column>
            </PressableStyled>
          </ViewStyled>
        ))}
      </Row>
    </ViewStyled>
  </Column>
);

export default EssentialToolsSection;
