import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import PlayPause from './index';

const meta: Meta<typeof PlayPause> = {
  title: 'Atoms/PlayPause',
  component: PlayPause,
  parameters: { layout: 'centered' },
  argTypes: { isPlaying: { control: { type: 'boolean' } } },
  args: { isPlaying: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Play: Story = { args: { isPlaying: false } };
export const Pause: Story = { args: { isPlaying: true } };

export const Interactive: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false);
    return <PlayPause isPlaying={playing} onPress={() => setPlaying((v) => !v)} />;
  },
};
