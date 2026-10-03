import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PrimaryImage from './index';
import ViewStyled from '../ViewStyled';

const meta: Meta<typeof PrimaryImage> = {
  title: 'Atoms/PrimaryImage',
  component: PrimaryImage,
  parameters: { layout: 'centered' },
  argTypes: {
    aspectRatio: { control: { type: 'select' }, options: ['1:1', '4:3', '16:9', '9:16', '5:3'] },
    showOverlay: { control: { type: 'boolean' } },
  },
  args: {
    source: { uri: 'https://picsum.photos/600/450' },
    aspectRatio: '4:3',
    showOverlay: false,
  },
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

export const FourThree: Story = { args: { aspectRatio: '4:3' } };
export const Square: Story = { args: { aspectRatio: '1:1' } };
export const WithOverlay: Story = { args: { aspectRatio: '16:9', showOverlay: true } };
