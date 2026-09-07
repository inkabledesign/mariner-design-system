import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './index';

const meta: Meta<typeof NavBar> = {
  title: 'Molecules/NavBar',
  component: NavBar,
  parameters: { layout: 'padded' },
  args: {
    items: [
      { iconName: 'ico-marina', title: 'Marina' },
      { iconName: 'ico-tides', title: 'Tides' },
      { iconName: 'ico-wind', title: 'Wind' },
      { iconName: 'ico-weather', title: 'Weather' },
    ],
    selectedIndex: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MarinaSelected: Story = {};
export const WeatherSelected: Story = { args: { selectedIndex: 3 } };
