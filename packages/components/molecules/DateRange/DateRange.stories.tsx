import type { Meta, StoryObj } from '@storybook/react';
import DateRange from './index';

const meta: Meta<typeof DateRange> = {
  title: 'Molecules/DateRange',
  component: DateRange,
  parameters: { layout: 'padded' },
  args: {
    from: { day: '12', month: '02', year: '2025' },
    to: { day: '19', month: '02', year: '2025' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { from: undefined, to: undefined } };
