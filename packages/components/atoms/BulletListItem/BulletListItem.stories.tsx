import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import BulletListItem from './index';
import ViewStyled from '../ViewStyled';

const meta: Meta<typeof BulletListItem> = {
  title: 'Atoms/BulletListItem',
  component: BulletListItem,
  parameters: { layout: 'padded' },
  argTypes: { text: { control: { type: 'text' } } },
  args: { text: 'Full access to this module — forever' },
  decorators: [
    (Story) => (
      <ViewStyled className="w-72">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
