import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProgressBar from './index';
import ViewStyled from '../ViewStyled';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'padded' },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    style: { control: { type: 'select' }, options: ['primary', 'accent'] },
    height: { control: { type: 'number' } },
  },
  args: { progress: 60, style: 'accent', height: 4 },
  decorators: [
    (Story) => (
      <ViewStyled className="w-64">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = { args: { style: 'accent', progress: 60 } };
export const Primary: Story = { args: { style: 'primary', progress: 30 } };
export const Complete: Story = { args: { progress: 100 } };
