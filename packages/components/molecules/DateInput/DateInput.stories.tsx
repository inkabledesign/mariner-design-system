import type { Meta, StoryObj } from '@storybook/react';
import DateInput from './index';

const meta: Meta<typeof DateInput> = {
  title: 'Molecules/DateInput',
  component: DateInput,
  parameters: { layout: 'padded' },
  args: { label: 'Date of birth', day: '12', month: '02', year: '1990' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { day: undefined, month: undefined, year: undefined } };
