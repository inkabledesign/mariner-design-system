import type { Meta, StoryObj } from '@storybook/react';
import TileCalendarDay from './index';
import Row from '../Row';
import React from 'react';

const meta: Meta<typeof TileCalendarDay> = {
  title: 'Atoms/TileCalendarDay',
  component: TileCalendarDay,
  parameters: { layout: 'padded' },
  decorators: [
    Story => (
      <Row className="w-24 bg-material-surface-0">
        <Story />
      </Row>
    ),
  ],
  args: { dayLetter: 'W', dayNumber: 14 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { isActive: true, isCompleted: true } };
export const Completed: Story = { args: { isCompleted: true } };
export const Future: Story = { args: { isFuture: true } };
