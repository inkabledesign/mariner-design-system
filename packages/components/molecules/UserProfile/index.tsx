import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import WaveDecoration from '../../atoms/WaveDecoration';
import Avatar from '../Avatar';
import type { UserProfileProps } from './index.types';

// The Figma spec renders the wave artwork at 50.474×15 while the packaged
// shortL/shortR assets are the same artwork at 64×19 — scale to match.
const WAVE_SCALE = 50.474 / 64;
const WAVE_BOX_WIDTH = 64;
const WAVE_BOX_HEIGHT = 19;
// Figma: HeaderProfile-OnBoard is 281×85; wave centers at (75.7, 53) and
// (205.2, 53); 84px Oval and 72px Avatar centered.
const HEADER_WIDTH = 281;
const HEADER_HEIGHT = 85;
const WAVE_TOP = 53 - WAVE_BOX_HEIGHT / 2;
const WAVE_LEFT_X = 75.7 - WAVE_BOX_WIDTH / 2;
const WAVE_RIGHT_X = 205.2 - WAVE_BOX_WIDTH / 2;

/**
 * UserProfile Component (Molecule)
 *
 * A header profile block: wave-flanked avatar over a white oval (with optional
 * edit affordance), name, and a details row of rating chip + qualification.
 * Source: Mariner-Library / Molecules / Header/Elements/UserProfille (Figma).
 *
 * @example
 * <UserProfile name="John Smith" rating="4.2" qualification="Skipper" />
 */
const UserProfile = ({
  name,
  imageUrl,
  rating,
  qualification,
  onEditPress,
  themeMode = 'light',
  className = '',
}: UserProfileProps) => (
  <Column className={`items-center pb-md ${className}`.trim()}>
    <ViewStyled
      className="overflow-hidden"
      style={{ width: HEADER_WIDTH, height: HEADER_HEIGHT }}
    >
      <WaveDecoration
        variant="shortL"
        color="text-brand-accent-100"
        themeMode={themeMode}
        className="absolute"
        style={{
          left: WAVE_LEFT_X,
          top: WAVE_TOP,
          transform: [{ scale: WAVE_SCALE }],
        }}
      />
      <WaveDecoration
        variant="shortR"
        color="text-brand-accent-100"
        themeMode={themeMode}
        className="absolute"
        style={{
          left: WAVE_RIGHT_X,
          top: WAVE_TOP,
          transform: [{ scale: WAVE_SCALE }],
        }}
      />
      <Row className="absolute inset-0 items-center justify-center">
        <ViewStyled className="h-[84px] w-[84px] rounded-full bg-material-surface-light" />
      </Row>
      <Row className="absolute inset-0 items-center justify-center">
        <Avatar
          size={72}
          imageUrl={imageUrl}
          iconName="ico-sailor"
          hasAddButton={Boolean(onEditPress)}
          onEditPress={onEditPress}
        />
      </Row>
    </ViewStyled>
    {name && (
      <TextStyled textStyle="heading6" textAlign="center" className="text-brand-primary-100">
        {name}
      </TextStyled>
    )}
    {(rating || qualification) && (
      <Row className="min-h-[21px] items-center justify-center gap-xs">
        {rating && (
          <Row className="items-center gap-xxs rounded-md border border-brand-secondary-5 bg-brand-primary-10 px-xxs">
            <TextStyled textStyle="label" className="text-brand-primary-100">
              {rating}
            </TextStyled>
            <Icon
              iconName="ico-star"
              color="text-brand-primary-100"
              iconSize="xs"
              themeMode={themeMode}
            />
          </Row>
        )}
        {qualification && (
          <TextStyled textStyle="body" textAlign="center" className="text-brand-primary-100">
            {qualification}
          </TextStyled>
        )}
      </Row>
    )}
  </Column>
);

export default UserProfile;
