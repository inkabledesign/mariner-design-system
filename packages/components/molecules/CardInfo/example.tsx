/**
 * CardInfo Component Examples
 * 
 * This file demonstrates all variants of the CardInfo component.
 * Use this as a reference for implementation.
 */

import React from 'react';
import Column from '../../atoms/Column';
import Icon from '../../atoms/Icon';
import CardInfo from './index';

export default function CardInfoExamples() {
  return (
    <Column className="gap-md p-md bg-material-surface-0">
      {/* Danger Variant (Default) */}
      <CardInfo
        title="Offline access"
        subtitle="Download module for offline access"
        body="This module includes pictures, videos, and audio. To avoid using up your mobile data, we recommend downloading it over Wi-Fi."
        type="danger"
      />

      {/* Warning Variant */}
      <CardInfo
        title="Data usage warning"
        subtitle="Large download ahead"
        body="This will use significant mobile data. Connect to Wi-Fi to proceed."
        type="warning"
      />

      {/* Success Variant */}
      <CardInfo
        title="Download complete"
        subtitle="Module ready for offline use"
        body="You can now access this module without an internet connection."
        type="success"
      />

      {/* Info Variant */}
      <CardInfo
        title="New feature available"
        subtitle="Check out offline mode"
        body="Download modules to access them without internet connection."
        type="info"
      />

      {/* Generic Variant */}
      <CardInfo
        title="Module information"
        subtitle="About this content"
        body="This module contains 12 lessons covering marine safety basics."
        type="generic"
      />

      {/* With Custom Icon */}
      <CardInfo
        title="Custom icon example"
        subtitle="Using a custom icon"
        body="You can provide your own icon name."
        type="info"
        iconName="ico-download"
      />

      {/* Minimal Content - Title Only */}
      <CardInfo
        title="Simple message"
        type="info"
      />

      {/* Title and Subtitle Only */}
      <CardInfo
        title="Quick notice"
        subtitle="Brief description"
        type="warning"
      />
    </Column>
  );
}
