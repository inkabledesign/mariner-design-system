import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TileInfo from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof TileInfo> = {
  title: 'Molecules/TileInfo',
  component: TileInfo,
  parameters: { layout: 'padded' },
  args: { iconName: 'ico-berth', label: 'VHF Channel', value: '80 or 37' },
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

export const Default: Story = {};
