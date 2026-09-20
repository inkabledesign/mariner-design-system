/**
 * Badge Component Examples
 * 
 * This file demonstrates all variants and configurations of the Badge component.
 * Use this as a reference for implementation.
 */

import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Badge from './index';

export default function BadgeExamples() {
  return (
    <Column className="gap-xl p-md bg-material-surface-0">
      {/* Primary Variants */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Primary Variant
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Available" variant="primary" size="lg" iconName="ico-tick-round" />
          <Badge label="Available" variant="primary" size="lg" />
          <Badge variant="primary" size="lg" iconName="ico-tick-round" />
          <Badge label="Available" variant="primary" size="sm" iconName="ico-tick-round" />
          <Badge label="Available" variant="primary" size="sm" />
          <Badge variant="primary" size="sm" iconName="ico-tick-round" />
        </Row>
      </Column>

      {/* Secondary Variants */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Secondary Variant
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Available" variant="secondary" size="lg" iconName="ico-tick-round" />
          <Badge label="Available" variant="secondary" size="lg" />
          <Badge variant="secondary" size="lg" iconName="ico-tick-round" />
          <Badge label="Available" variant="secondary" size="sm" iconName="ico-tick-round" />
          <Badge label="Available" variant="secondary" size="sm" />
          <Badge variant="secondary" size="sm" iconName="ico-tick-round" />
        </Row>
      </Column>

      {/* Danger Variants */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Danger Variant
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Unavailable" variant="danger" size="lg" iconName="ico-close-round" />
          <Badge label="Unavailable" variant="danger" size="lg" />
          <Badge variant="danger" size="lg" iconName="ico-close-round" />
          <Badge label="Unavailable" variant="danger" size="sm" iconName="ico-close-round" />
          <Badge label="Unavailable" variant="danger" size="sm" />
          <Badge variant="danger" size="sm" iconName="ico-close-round" />
        </Row>
      </Column>

      {/* Success Variants */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Success Variant
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Complete" variant="success" size="lg" iconName="ico-tick-round" />
          <Badge label="Complete" variant="success" size="lg" />
          <Badge variant="success" size="lg" iconName="ico-tick-round" />
          <Badge label="Complete" variant="success" size="sm" iconName="ico-tick-round" />
          <Badge label="Complete" variant="success" size="sm" />
          <Badge variant="success" size="sm" iconName="ico-tick-round" />
        </Row>
      </Column>

      {/* Warning Variants */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Warning Variant
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Pending" variant="warning" size="lg" iconName="ico-info-round" />
          <Badge label="Pending" variant="warning" size="lg" />
          <Badge variant="warning" size="lg" iconName="ico-info-round" />
          <Badge label="Pending" variant="warning" size="sm" iconName="ico-info-round" />
          <Badge label="Pending" variant="warning" size="sm" />
          <Badge variant="warning" size="sm" iconName="ico-info-round" />
        </Row>
      </Column>

      {/* Custom Icons */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Custom Icons
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Update" variant="danger" size="sm" iconName="ico-download" />
          <Badge label="Starred" variant="primary" size="sm" iconName="ico-star" />
          <Badge label="Alert" variant="warning" size="sm" iconName="ico-info-round" />
        </Row>
      </Column>

      {/* Real-World Examples */}
      <Column className="gap-md">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          Real-World Examples
        </TextStyled>
        <Row className="gap-md flex-wrap">
          <Badge label="Available" variant="success" size="sm" />
          <Badge label="Coming Soon" variant="warning" size="sm" />
          <Badge label="Locked" variant="danger" size="sm" />
          <Badge label="Update" variant="danger" size="sm" />
          <Badge label="Premium" variant="primary" size="lg" />
          <Badge label="Beta" variant="warning" size="lg" />
        </Row>
      </Column>
    </Column>
  );
}
