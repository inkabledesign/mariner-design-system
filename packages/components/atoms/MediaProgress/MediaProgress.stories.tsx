import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import MediaProgress from './index';
import ViewStyled from '../ViewStyled';

const meta: Meta<typeof MediaProgress> = {
  title: 'Atoms/MediaProgress',
  component: MediaProgress,
  parameters: { layout: 'padded' },
  argTypes: { progress: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  args: { progress: 60, currentTime: '00:16', totalTime: '03:42' },
  decorators: [
    (Story) => (
      <ViewStyled className="w-80 p-md bg-brand-primary-100 rounded-md">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
