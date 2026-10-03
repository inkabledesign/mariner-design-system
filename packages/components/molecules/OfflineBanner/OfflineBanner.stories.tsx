import type { Meta, StoryObj } from '@storybook/react';
import OfflineBanner from './index';
import ViewStyled from '../../atoms/ViewStyled';
import React from 'react';

const meta: Meta<typeof OfflineBanner> = {
  title: 'Molecules/OfflineBanner',
  component: OfflineBanner,
  parameters: { layout: 'fullscreen' },
  decorators: [
    Story => (
      <ViewStyled className="flex-1 h-[400px] bg-material-surface-5 relative">
        <Story />
      </ViewStyled>
    ),
  ],
  args: { isOffline: true },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Offline: Story = {};
export const Online: Story = { args: { isOffline: false } };
