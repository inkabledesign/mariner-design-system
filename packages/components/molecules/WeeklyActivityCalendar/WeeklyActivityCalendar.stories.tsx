import type { Meta, StoryObj } from '@storybook/react';
import WeeklyActivityCalendar from './index';

const meta: Meta<typeof WeeklyActivityCalendar> = {
  title: 'Molecules/WeeklyActivityCalendar',
  component: WeeklyActivityCalendar,
  parameters: { layout: 'padded' },
  args: {
    days: [
      { dayLetter: 'M', dayNumber: 12, isCompleted: true },
      { dayLetter: 'T', dayNumber: 13, isCompleted: true },
      { dayLetter: 'W', dayNumber: 14, isActive: true, isCompleted: true },
      { dayLetter: 'T', dayNumber: 15, isFuture: true },
      { dayLetter: 'F', dayNumber: 16, isFuture: true },
      { dayLetter: 'S', dayNumber: 17, isFuture: true },
      { dayLetter: 'S', dayNumber: 18, isFuture: true },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
