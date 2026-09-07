import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import ProgressBar from '../../atoms/ProgressBar';
import Badge from '../Badge';
import type { CardModuleProps, ModuleStateType, ModuleType } from './index.types';

const COLOR_MAP: Record<string, { background: string }> = {
  completed: { background: 'bg-brand-accent-100' },
  retake: { background: 'bg-system-error-100' },
  failed: { background: 'bg-system-error-100' },
  quiz: { background: 'bg-brand-primary-100' },
  lesson: { background: 'bg-material-surface-80' },
  bundle: { background: 'bg-material-surface-80' },
};

const getCardColors = (type?: ModuleType, state?: ModuleStateType) =>
  (state && COLOR_MAP[state]) || COLOR_MAP[type || 'lesson'];

/**
 * CardModule Component (Molecule)
 *
 * A course/module card: coloured graphic band (with optional image), title,
 * subtitle, caption + footnote rows, and a progress bar. State colours take
 * priority over type colours.
 * Source: mariner-edu molecules/CardModule (simplified: offline-media service
 * and store lookups removed → hasUpdate/isDownloaded/imageUrl props).
 *
 * @example
 * <CardModule title="VHF Radio" type="lesson" footnote="20 min" progress={40} onPress={fn} />
 */
const CardModule = ({
  title,
  subtitle,
  caption = 'Completed',
  captionIcon,
  footnote = '30 min',
  footnoteIcon,
  progress = 0,
  type,
  state,
  imageUrl,
  hasUpdate = false,
  isDownloaded = false,
  onPress,
  className = '',
}: CardModuleProps) => {
  const { background } = getCardColors(type, state);
  const content = (
    <>
      {/* Graphic band */}
      <ViewStyled className={`h-24 w-full overflow-hidden relative ${background}`}>
        {imageUrl && (
          <Row className="absolute inset-0 flex-nowrap items-end justify-end pr-md">
            <ExpoImage
              style={{ height: 72, width: 72 }}
              source={{ uri: imageUrl }}
              contentFit="contain"
            />
          </Row>
        )}
      </ViewStyled>

      {hasUpdate && (
        <ViewStyled className="absolute top-sm left-xs z-10">
          <Badge variant="primary" size="sm" iconName="ico-download-round-fill" label="Update" />
        </ViewStyled>
      )}
      {isDownloaded && !hasUpdate && (
        <ViewStyled className="absolute top-sm left-xs z-10">
          <Badge
            variant={type === 'lesson' ? 'default' : 'primary'}
            size="lg"
            iconName="ico-downloaded-round-fill"
          />
        </ViewStyled>
      )}

      <Column className="px-md py-sm gap-xs justify-end items-end flex-1">
        <TextStyled
          textStyle="heading5"
          fontWeight="600"
          className="w-full text-left text-material-surface-100"
          numberOfLines={2}
        >
          {title}
        </TextStyled>
        {subtitle && (
          <TextStyled
            textStyle="footnote"
            className="w-full text-left text-material-surface-100"
            numberOfLines={2}
          >
            {subtitle}
          </TextStyled>
        )}
        <Row className="items-end justify-between w-full">
          <Row className="items-center max-w-[50%] gap-xxs">
            {caption && (
              <Row className="items-center gap-xxs">
                {captionIcon && (
                  <Icon iconName={captionIcon} color="text-material-surface-80" className="w-4 h-4" />
                )}
                <TextStyled textStyle="footnote" className="text-material-surface-80">
                  {caption}
                </TextStyled>
              </Row>
            )}
          </Row>
          <Row className="items-center max-w-[80%] gap-xxs">
            {state === 'completed' ? (
              <Icon iconName="ico-success" color="text-brand-accent-100" className="w-8 h-8" />
            ) : footnote ? (
              <Row className="items-center gap-xxs">
                {footnoteIcon && (
                  <Icon
                    iconName={footnoteIcon}
                    color="text-material-surface-80"
                    className="w-4 h-4"
                  />
                )}
                <TextStyled textStyle="footnote" className="text-material-surface-60">
                  {footnote}
                </TextStyled>
              </Row>
            ) : null}
          </Row>
        </Row>
      </Column>
      <ProgressBar progress={state === 'completed' ? 100 : progress} />
    </>
  );

  const cardClasses = `justify-between flex-col flex w-[48%] aspect-[16/9] rounded-md border border-brand-accent-60 dark:border-brand-accent-40 bg-material-surface-0 dark:bg-material-surface-100 overflow-hidden ${className}`.trim();

  return onPress ? (
    <PressableStyled onPress={onPress} className={cardClasses}>
      {content}
    </PressableStyled>
  ) : (
    <ViewStyled className={cardClasses}>{content}</ViewStyled>
  );
};

export default CardModule;
