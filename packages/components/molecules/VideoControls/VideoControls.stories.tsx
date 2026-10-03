import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import VideoControls from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof VideoControls> = {
  title: 'Molecules/VideoControls',
  component: VideoControls,
  parameters: { layout: 'centered' },
  decorators: [
    Story => (
      <ViewStyled className="w-[320px] h-[180px] bg-material-surface-80 relative">
        <Story />
      </ViewStyled>
    ),
  ],
  args: {
    isPlaying: false,
    positionMillis: 12500,
    durationMillis: 60000,
    progress: 21,
    onPlayPause: () => {},
    onFullscreen: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Paused: Story = {};
export const Playing: Story = { args: { isPlaying: true } };
