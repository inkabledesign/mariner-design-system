import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import PrimaryImage from '../../atoms/PrimaryImage';
import CardInfo from '../../molecules/CardInfo';
import ImagePager from '../../molecules/ImagePager';
import Table from '../Table';
import type { SectionContentProps } from './index.types';

/**
 * SectionContent Component (Organism)
 *
 * Renders an ordered list of content blocks: titles, rich text, images,
 * carousels, highlight cards, and tables. Presentational — CMS block mapping
 * and media playback live in the consumer.
 * Source: mariner-edu organisms/SectionContent (simplified: Sanity types,
 * PortableText, offline-media service, and audio/video players removed —
 * consumers map their CMS blocks onto SectionContentBlock).
 *
 * @example
 * <SectionContent blocks={[{ type: 'title', text: 'Intro' }, { type: 'text', text: 'Body…' }]} />
 */
const SectionContent = ({ blocks, className = '' }: SectionContentProps) => (
  <Column className={`gap-md px-md ${className}`.trim()}>
    {blocks.map((block, index) => {
      switch (block.type) {
        case 'title':
          return (
            <TextStyled key={index} textStyle="heading5" className="text-material-surface-100">
              {block.text}
            </TextStyled>
          );
        case 'text':
          return block.render ? (
            <React.Fragment key={index}>{block.render(block.text)}</React.Fragment>
          ) : (
            <TextStyled key={index} textStyle="body" className="text-material-surface-80">
              {block.text}
            </TextStyled>
          );
        case 'image':
          return (
            <Column key={index} className="rounded-md overflow-hidden">
              <PrimaryImage source={block.source} aspectRatio="4:3" />
              {block.caption && (
                <TextStyled textStyle="caption" className="mt-xs text-center italic">
                  {block.caption}
                </TextStyled>
              )}
            </Column>
          );
        case 'carousel':
          return (
            <Column key={index} className="rounded-md overflow-hidden">
              <ImagePager sources={block.sources} currentIndex={block.currentIndex ?? 0} />
            </Column>
          );
        case 'highlight':
          return (
            <CardInfo
              key={index}
              type={block.type2 ?? 'info'}
              title={block.title}
              body={block.body}
            />
          );
        case 'table':
          return <Table key={index} columns={block.columns} data={block.data} />;
        case 'custom':
          return <React.Fragment key={index}>{block.render()}</React.Fragment>;
        default:
          return null;
      }
    })}
  </Column>
);

export default SectionContent;
