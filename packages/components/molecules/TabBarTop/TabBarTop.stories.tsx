import type { Meta, StoryObj } from '@storybook/react';
import TabBarTop from './index';

const meta: Meta<typeof TabBarTop> = {
  title: 'Molecules/TabBarTop',
  component: TabBarTop,
  parameters: { layout: 'padded' },
  args: { tabs: ['Map', 'List', 'Saved', 'Settings'], selectedIndex: 0 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstSelected: Story = {};
export const SecondSelected: Story = { args: { selectedIndex: 1 } };
export const TwoTabs: Story = { args: { tabs: ['Overview', 'Details'], selectedIndex: 0 } };
