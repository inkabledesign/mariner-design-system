import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressDetailCard from './index';
import TextStyled from '../../atoms/TextStyled';

const meta: Meta<typeof ProgressDetailCard> = {
  title: 'Molecules/ProgressDetailCard',
  component: ProgressDetailCard,
  parameters: { layout: 'padded' },
  args: { expanded: false },
  render: args => (
    <ProgressDetailCard {...args}>
      <TextStyled textStyle="footnote" className="text-material-surface-60">
        Detailed breakdown content rendered via the children slot.
      </TextStyled>
    </ProgressDetailCard>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {};
export const Expanded: Story = { args: { expanded: true } };
