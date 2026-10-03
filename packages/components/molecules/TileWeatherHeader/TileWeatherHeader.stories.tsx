import type { Meta, StoryObj } from '@storybook/react';
import TileWeatherHeader from './index';

const meta: Meta<typeof TileWeatherHeader> = {
  title: 'Molecules/TileWeatherHeader',
  component: TileWeatherHeader,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: {
    title: 'Tides',
    day: 'Friday 13th | 12:20am',
    description: 'Warm with a chance of rain',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Weather: Story = { args: { title: 'Weather' } };
export const OnLight: Story = {
  args: { themeMode: 'light' },
  parameters: { backgrounds: { default: 'light' } },
};
