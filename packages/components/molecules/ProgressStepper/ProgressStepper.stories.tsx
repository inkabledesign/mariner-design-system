import type { Meta, StoryObj } from '@storybook/react';
import ProgressStepper from './index';

const meta: Meta<typeof ProgressStepper> = {
  title: 'Molecules/ProgressStepper',
  component: ProgressStepper,
  parameters: { layout: 'padded' },
  argTypes: {
    themeMode: { control: { type: 'select' }, options: ['light', 'dark'] },
    total: { control: { type: 'number' } },
    current: { control: { type: 'number' } },
  },
  args: { total: 11, current: 6 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeadingLabel: Story = {
  args: { total: 11, current: 6, labelLeading: 'STEP 1 of 5 - Tidal Diamond' },
};

export const WithTrailingLabel: Story = {
  args: { total: 5, current: 2, labelTrailing: '2/5' },
};

export const WithBothLabels: Story = {
  args: { total: 5, current: 3, labelLeading: 'Setup', labelTrailing: '3/5' },
};

export const Dark: Story = {
  args: { total: 11, current: 6, labelLeading: 'STEP 1 of 5 - Tidal Diamond', themeMode: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const Empty: Story = { args: { total: 5, current: 0 } };

export const Complete: Story = { args: { total: 5, current: 5 } };
