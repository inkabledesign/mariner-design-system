import React from 'react';
import Column from '../Column';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';
import Icon from '../Icon';
import type { TileCalendarDayProps } from './index.types';

/**
 * TileCalendarDay Component (Atom)
 *
 * A single day cell for the weekly activity calendar: day letter, day number,
 * and a completion indicator. States: completed, active (today), future.
 * Source: mariner-edu atoms/TileCalendarDay (presentational port).
 */
const TileCalendarDay = ({
  dayLetter,
  dayNumber,
  isCompleted,
  isActive = false,
  isFuture = false,
}: TileCalendarDayProps) => {
  const textColor = isActive
    ? 'text-brand-primary-100'
    : isFuture
      ? 'text-material-surface-40'
      : 'text-material-surface-60';
  const outline = isActive ? 'rounded-md border border-brand-primary-100' : '';
  const iconBg = isCompleted
    ? isActive
      ? 'bg-brand-primary-100'
      : 'bg-material-surface-60'
    : 'bg-material-surface-0';
  const iconBorder = isCompleted ? '' : 'border-brand-primary-40';

  return (
    <Column className={`gap-[3px] min-h-[72px] flex-1 items-center justify-center py-xs px-xs ${outline}`}>
      <Column className="items-center justify-center w-full">
        <TextStyled textStyle="body" className={textColor}>
          {dayLetter}
        </TextStyled>
        <TextStyled textStyle="heading6" className={textColor}>
          {dayNumber}
        </TextStyled>
      </Column>
      <ViewStyled
        className={`w-4 h-4 items-center justify-center border rounded-full ${iconBg} ${iconBorder}`}
      >
        {isCompleted && (
          <Icon iconName="ico-tick" color="text-material-surface-0" className="w-3 h-3" />
        )}
      </ViewStyled>
    </Column>
  );
};

export default TileCalendarDay;
