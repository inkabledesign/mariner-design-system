import type { Meta, StoryObj } from '@storybook/react';
import Star from './index';

const meta: Meta<typeof Star> = {
  title: 'Atoms/Star',
  component: Star,
  parameters: { layout: 'centered' },
  argTypes: { active: { control: { type: 'boolean' } } },
  args: { active: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { active: false } };
export const Active: Story = { args: { active: true } };
