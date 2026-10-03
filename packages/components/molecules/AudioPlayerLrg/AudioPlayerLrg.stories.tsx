import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import AudioPlayerLrg from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof AudioPlayerLrg> = {
  title: 'Molecules/AudioPlayerLrg',
  component: AudioPlayerLrg,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <ViewStyled className="w-80">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
      <AudioPlayerLrg
        title="Distress calls"
        subtitle="Module 4 · Lesson 2"
        isPlaying={isPlaying}
        positionMillis={16000}
        durationMillis={222000}
        progress={60}
        onPlayPause={() => setIsPlaying((v) => !v)}
      />
    );
  },
};
