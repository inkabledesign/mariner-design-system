import type { Meta, StoryObj } from '@storybook/react';
import InputTileSelect from './index';

const meta: Meta<typeof InputTileSelect> = {
  title: 'Molecules/InputTileSelect',
  component: InputTileSelect,
  parameters: { layout: 'centered' },
  args: { iconName: 'ico-loundry', label: 'Laundry' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { isActive: true } };
