import type { Meta, StoryObj } from '@storybook/react';
import TileWeatherItem from './index';

const meta: Meta<typeof TileWeatherItem> = {
  title: 'Molecules/TileWeatherItem',
  component: TileWeatherItem,
  parameters: { layout: 'centered' },
  args: { iconName: 'ico-weather-clearday', value: '33°C', label: 'Temp.' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Temperature: Story = {};
export const Humidity: Story = {
  args: { iconName: 'ico-weather-rain', value: '87%', label: 'Humidity' },
};
export const OnDark: Story = {
  args: { themeMode: 'dark', iconName: 'ico-weather-windy', value: '12 kn', label: 'Wind' },
};
