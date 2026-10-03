import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import CardInfo from '../../molecules/CardInfo';
import Button from '../../molecules/Button';
import ProgressBar from '../../atoms/ProgressBar';
import type { SectionOfflineAccessProps } from './index.types';

/**
 * SectionOfflineAccess Component (Organism)
 *
 * Offline access management: info card (not-downloaded / downloaded / update),
 * and action buttons (download / progress / update / delete).
 * Presentational — download logic lives in the consumer.
 * Source: mariner-edu organisms/SectionOfflineAccess (simplified).
 *
 * @example
 * <SectionOfflineAccess downloaded={false} onDownloadPress={fn} />
 */
const SectionOfflineAccess = ({
  downloaded,
  downloading = false,
  downloadProgress = 0,
  updateAvailable = false,
  updateMessage,
  changelog,
  updateLabel,
  onDownloadPress,
  onDeletePress,
  onUpdatePress,
  className = '',
}: SectionOfflineAccessProps) => (
  <ViewStyled
    className={`gap-xl pt-md pb-xl px-md border border-brand-primary-10 rounded-lg ${className}`.trim()}
  >
    {!downloaded ? (
      <CardInfo
        title="Offline access"
        subtitle="Your module is not downloaded. Download it to access materials offline"
        body="This module includes pictures, videos, and audio. To avoid using up your mobile data, we recommend downloading it over Wi-Fi."
        type="danger"
        iconName="ico-close-round"
      />
    ) : (
      <>
        <CardInfo
          title="Offline access"
          subtitle="Access course materials without an internet connection."
          body="Feel free to delete this module to free up space. Your progress will stay saved."
          type="success"
          iconName="ico-tick-round"
        />
        {(updateAvailable || downloading) && updateMessage && (
          <CardInfo
            title="Update available"
            subtitle="A new version is available. Update to get the latest content."
            body={updateMessage}
            type="warning"
            iconName="ico-info-round"
          >
            {changelog && changelog.length > 0 && (
              <Column className="gap-xs">
                <TextStyled textStyle="footnote" className="text-material-surface-60">
                  What's new:
                </TextStyled>
                {changelog.map(item => (
                  <Row key={item} className="gap-xs">
                    <TextStyled textStyle="caption" className="text-material-surface-80">
                      •
                    </TextStyled>
                    <TextStyled textStyle="caption" className="flex-1 text-material-surface-80">
                      {item}
                    </TextStyled>
                  </Row>
                ))}
              </Column>
            )}
          </CardInfo>
        )}
      </>
    )}
    <Column className="gap-xl">
      {downloading ? (
        <Column className="gap-xs">
          <ProgressBar progress={downloadProgress} style="primary" height={4} />
          <TextStyled textStyle="footnote" className="text-material-surface-60">
            Downloading… {Math.round(downloadProgress)}%
          </TextStyled>
        </Column>
      ) : !downloaded ? (
        <Button
          text="Download module"
          variant="secondary"
          onPress={onDownloadPress}
          className="flex-1"
          iconName="ico-download"
          iconPosition="right"
        />
      ) : (
        <>
          {updateAvailable && (
            <Button
              text={updateLabel ?? 'Update'}
              variant="primary"
              onPress={onUpdatePress}
              className="flex-1"
              iconName="ico-download"
              iconPosition="right"
            />
          )}
          <Button
            text="Delete download"
            variant="secondary"
            onPress={onDeletePress}
            className="flex-1"
            iconName="ico-trash"
            iconPosition="right"
          />
        </>
      )}
    </Column>
  </ViewStyled>
);

export default SectionOfflineAccess;
