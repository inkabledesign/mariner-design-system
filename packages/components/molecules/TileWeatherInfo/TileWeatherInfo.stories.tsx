import type { Meta, StoryObj } from '@storybook/react';
import TileWeatherInfo from './index';

const meta: Meta<typeof TileWeatherInfo> = {
  title: 'Molecules/TileWeatherInfo',
  component: TileWeatherInfo,
  parameters: { layout: 'centered' },
  args: { iconName: 'ico-weather-cloudy', temperature: '27°C', condition: 'Partly cloudy' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Cloudy: Story = { args: { iconName: 'ico-weather-cloudy', condition: 'Partly cloudy' } };
export const Clear: Story = {
  args: { iconName: 'ico-weather-clearday', temperature: '31°C', condition: 'Clear' },
};
