import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Divider from './index';
import ViewStyled from '../ViewStyled';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
  argTypes: { type: { control: { type: 'select' }, options: ['horizontal', 'vertical'] } },
  args: { type: 'horizontal', className: 'bg-material-surface-20' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { type: 'horizontal' },
  render: (args) => (
    <ViewStyled className="w-40">
      <Divider {...args} />
    </ViewStyled>
  ),
};

export const Vertical: Story = {
  args: { type: 'vertical' },
  render: (args) => (
    <ViewStyled className="h-16">
      <Divider {...args} />
    </ViewStyled>
  ),
};
