import type { Meta, StoryObj } from '@storybook/react';
import TabsBarBottom from './index';

const meta: Meta<typeof TabsBarBottom> = {
  title: 'Molecules/TabsBarBottom',
  component: TabsBarBottom,
  parameters: { layout: 'padded' },
  args: {
    tabs: ['12:20 am', '1:20 am', '2:20 am', '3:20 am'],
    selectedIndex: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ThirdSelected: Story = { args: { selectedIndex: 2 } };
