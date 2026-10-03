import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CardInfo from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof CardInfo> = {
  title: 'Molecules/CardInfo',
  component: CardInfo,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: { type: 'select' }, options: ['danger', 'warning', 'success', 'info', 'generic'] },
  },
  args: {
    title: 'Heads up',
    body: 'Your subscription renews in 3 days.',
    type: 'info',
  },
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

export const Info: Story = { args: { type: 'info' } };
export const Success: Story = { args: { type: 'success', title: 'All done', body: 'Module completed.' } };
export const Warning: Story = { args: { type: 'warning', title: 'Careful', body: 'Low storage.' } };
export const Danger: Story = { args: { type: 'danger', title: 'Error', body: 'Something went wrong.' } };
