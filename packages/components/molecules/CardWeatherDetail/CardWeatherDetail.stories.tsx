import type { Meta, StoryObj } from '@storybook/react';
import CardWeatherDetail from './index';

const meta: Meta<typeof CardWeatherDetail> = {
  title: 'Molecules/CardWeatherDetail',
  component: CardWeatherDetail,
  parameters: { layout: 'padded' },
  args: {
    date: 'Friday 13th',
    items: [
      { iconName: 'ico-weather-clearday', value: '33°C', label: 'Temp.' },
      { iconName: 'ico-weather-windy', value: '999.3 mb', label: 'Pressure' },
      { iconName: 'ico-weather-rain', value: '87%', label: 'Humidity' },
      { iconName: 'ico-weather-cloudy', value: '8.1 km', label: 'Visibility' },
    ],
    summary: 'Warm with a chance of rain later in the evening.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoSummary: Story = { args: { summary: undefined } };
