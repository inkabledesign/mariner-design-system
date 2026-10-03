import type { Meta, StoryObj } from '@storybook/react';
import Rating from './index';

const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5, step: 1 } },
    max: { control: { type: 'number', min: 1, max: 10, step: 1 } },
  },
  args: { value: 3, max: 5 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Three: Story = { args: { value: 3 } };
export const Full: Story = { args: { value: 5 } };
export const Empty: Story = { args: { value: 0 } };
