import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import Badge from '../Badge';
import Avatar from '../Avatar';
import type { UserProfileProps } from './index.types';

/**
 * UserProfile Component (Molecule)
 *
 * A header profile block: avatar (with optional edit affordance), name, and a
 * details row of rating badge + qualification.
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
  className = '',
}: UserProfileProps) => (
  <Column className={`items-center gap-sm bg-material-surface-0 p-md ${className}`.trim()}>
    <Avatar size={84} imageUrl={imageUrl} iconName="ico-sailor" onEditPress={onEditPress} />
    <TextStyled textStyle="heading6" className="text-brand-primary-100">
      {name}
    </TextStyled>
    {(rating || qualification) && (
      <Row className="items-center gap-sm">
        {rating && <Badge label={rating} variant="primary" size="sm" iconName="ico-star" />}
        {qualification && (
          <TextStyled textStyle="body" className="text-brand-primary-100">
            {qualification}
          </TextStyled>
        )}
      </Row>
    )}
  </Column>
);

export default UserProfile;
