import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TileCalendarDay from '../../atoms/TileCalendarDay';
import type { WeeklyActivityCalendarProps } from './index.types';

/**
 * WeeklyActivityCalendar Component (Molecule)
 *
 * A 7-day week view of activity completion — day letters, numbers, completion
 * ticks, and active-day highlighting. Figma: TileCallendarWeek (1199:297268).
 * Source: mariner-edu molecules/WeeklyActivityCalendar (presentational port).
 *
 * @example
 * <WeeklyActivityCalendar days={week} />
 */
const WeeklyActivityCalendar = ({ days, className = '' }: WeeklyActivityCalendarProps) => (
  <Column
    className={`flex-1 bg-material-surface-0 border border-brand-primary-20 rounded-lg ${className}`.trim()}
  >
    <Row className="flex-1 items-center">
      {days.map((day, index) => (
        <TileCalendarDay
          key={`${day.dayLetter}-${day.dayNumber}-${index}`}
          dayLetter={day.dayLetter}
          dayNumber={day.dayNumber}
          isCompleted={day.isCompleted}
          isActive={day.isActive}
          isFuture={day.isFuture}
        />
      ))}
    </Row>
  </Column>
);

export default WeeklyActivityCalendar;
