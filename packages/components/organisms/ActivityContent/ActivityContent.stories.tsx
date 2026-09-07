import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ActivityContent from './index';
import TextStyled from '../../atoms/TextStyled';

const Body = ({ text = 'Activity body rendered by the consumer (quiz, short answer, scenario…)' }: { text?: string }) => (
  <TextStyled textStyle="body" className="text-material-surface-100">
    {text}
  </TextStyled>
);

const meta: Meta<typeof ActivityContent> = {
  title: 'Organisms/ActivityContent',
  component: ActivityContent,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    asset: { type: 'image', source: { uri: 'https://picsum.photos/seed/act/640/480' }, caption: 'Sound signals' },
  },
  render: args => (
    <ActivityContent {...args}>
      <Body />
    </ActivityContent>
  ),
};

export const WithCarousel: Story = {
  args: {
    asset: {
      type: 'carousel',
      sources: [
        { uri: 'https://picsum.photos/seed/c1/640/480' },
        { uri: 'https://picsum.photos/seed/c2/640/480' },
      ],
    },
  },
  render: args => (
    <ActivityContent {...args}>
      <Body text="Activity body" />
    </ActivityContent>
  ),
};

export const Empty: Story = {};
