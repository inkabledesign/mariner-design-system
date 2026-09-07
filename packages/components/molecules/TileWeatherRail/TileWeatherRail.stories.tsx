import type { Meta, StoryObj } from '@storybook/react';
import TileWeatherRail from './index';

const meta: Meta<typeof TileWeatherRail> = {
  title: 'Molecules/TileWeatherRail',
  component: TileWeatherRail,
  parameters: { layout: 'padded' },
  args: {
    date: 'Friday 13th',
    items: [
      { iconName: 'ico-weather-clearday', value: '33°C', label: 'Temp.' },
      { iconName: 'ico-weather-windy', value: '999.3 mb', label: 'Pressure' },
      { iconName: 'ico-weather-rain', value: '87%', label: 'Humidity' },
      { iconName: 'ico-weather-cloudy', value: '8.1 km', label: 'Visibility' },
      { iconName: 'ico-weather-clearday', value: '6', label: 'UV Index' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoDate: Story = { args: { date: undefined } };
