import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Overlay from './index';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';

const meta: Meta<typeof Overlay> = {
  title: 'Atoms/Overlay',
  component: Overlay,
  parameters: { layout: 'fullscreen' },
  argTypes: { variant: { control: { type: 'select' }, options: ['50%', 'blur'] } },
  args: { variant: '50%' },
  decorators: [
    (Story) => (
      <ViewStyled className="w-full h-[320px] bg-brand-primary-100">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Scrim: Story = {
  args: { variant: '50%' },
  render: (args) => (
    <Overlay {...args}>
      <ViewStyled className="bg-material-surface-0 p-lg rounded-md">
        <TextStyled textStyle="body">Dialog content</TextStyled>
      </ViewStyled>
    </Overlay>
  ),
};
