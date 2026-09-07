import type { Meta, StoryObj } from '@storybook/react';
import PageControl from './index';

const meta: Meta<typeof PageControl> = {
  title: 'Atoms/PageControl',
  component: PageControl,
  parameters: { layout: 'centered' },
  argTypes: {
    count: { control: { type: 'number', min: 2, max: 5, step: 1 } },
    selected: { control: { type: 'number', min: 0, max: 4, step: 1 } },
    platter: { control: { type: 'boolean' } },
  },
  args: { count: 3, selected: 1, platter: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { platter: false } };
export const WithPlatter: Story = { args: { platter: true } };
