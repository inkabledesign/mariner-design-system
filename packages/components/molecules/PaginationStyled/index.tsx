import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import PaginationItem from '../../atoms/PaginationItem';
import type { PaginationStyledProps } from './index.types';

const CONTAINER_CLASSES =
  'border border-brand-primary-10 bg-material-surface-0 rounded-xl p-sm overflow-hidden';

/**
 * PaginationStyled Component (Molecule)
 *
 * A pill container of pagination items — numbered rings or dots — used for
 * section navigation in lessons and activities.
 * Source: Figma PaginationStyledNumber (4215:30483) / PaginationStyledDot
 * (4215:30497): surface-0 fill, 1px primary-10 border, radius-xl, spacing-sm
 * padding and gap.
 *
 * @example
 * <PaginationStyled count={12} activeIndex={3} itemStates={{ 0: 'correct', 1: 'error' }} onItemPress={go} />
 * <PaginationStyled variant="dot" count={12} activeIndex={1} />
 */
const PaginationStyled = ({
  count,
  activeIndex = 0,
  variant = 'number',
  itemStates,
  onItemPress,
  scrollable = true,
  className = '',
}: PaginationStyledProps) => {
  const items = Array.from({ length: count }).map((_, index) => {
    const state = itemStates?.[index] ?? (index === activeIndex ? 'active' : 'default');
    const item = <PaginationItem variant={variant} state={state} number={index + 1} />;

    return onItemPress ? (
      <Pressable
        key={index}
        onPress={() => onItemPress(index)}
        accessibilityRole="button"
        accessibilityState={{ selected: index === activeIndex }}
        hitSlop={4}>
        {item}
      </Pressable>
    ) : (
      <ViewStyled key={index}>{item}</ViewStyled>
    );
  });

  // Figma: the number pill fills the available width (items lead from the left);
  // the dot pill hugs its content.
  if (!scrollable) {
    return (
      <Row className={`items-center gap-sm self-start ${CONTAINER_CLASSES} ${className}`.trim()}>
        {items}
      </Row>
    );
  }

  return (
    <ViewStyled className={`w-full ${CONTAINER_CLASSES} ${className}`.trim()}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Row className="items-center gap-sm">{items}</Row>
      </ScrollView>
    </ViewStyled>
  );
};

export default PaginationStyled;
