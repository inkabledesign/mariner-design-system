import type { Meta, StoryObj } from '@storybook/react';
import TileIcon from './index';

const meta: Meta<typeof TileIcon> = {
  title: 'Molecules/TileIcon',
  component: TileIcon,
  parameters: { layout: 'centered' },
  args: { iconName: 'ico-loundry', label: 'Laundry' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = { args: { isActive: true } };
export const Inactive: Story = { args: { isActive: false } };
