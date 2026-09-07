import type { Meta, StoryObj } from '@storybook/react';
import TileNav from './index';

const meta: Meta<typeof TileNav> = {
  title: 'Molecules/TileNav',
  component: TileNav,
  parameters: { layout: 'centered' },
  argTypes: { selected: { control: { type: 'boolean' } } },
  args: { title: 'Tides', iconName: 'ico-tides', selected: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { selected: false } };
export const Selected: Story = { args: { selected: true } };
