import type { Meta, StoryObj } from '@storybook/react';
import Grabber from './index';

const meta: Meta<typeof Grabber> = {
  title: 'Atoms/Grabber',
  component: Grabber,
  parameters: { layout: 'centered' },
  argTypes: { mode: { control: { type: 'select' }, options: ['light', 'dark', 'darkElevated'] } },
  args: { mode: 'light' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: { mode: 'light' } };
export const Dark: Story = { args: { mode: 'dark' } };
