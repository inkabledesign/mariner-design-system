import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import OnboardingWrapper from './index';
import TextStyled from '../TextStyled';

const meta: Meta<typeof OnboardingWrapper> = {
  title: 'Atoms/OnboardingWrapper',
  component: OnboardingWrapper,
  parameters: { layout: 'fullscreen' },
  render: args => (
    <OnboardingWrapper {...args}>
      <TextStyled textStyle="heading3" className="text-material-surface-0 p-xl">
        Welcome
      </TextStyled>
    </OnboardingWrapper>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithTextures: Story = {
  args: {
    textureRightSource: { uri: 'https://picsum.photos/seed/tex/200/200' },
    textureLeftSource: { uri: 'https://picsum.photos/seed/tex2/200/200' },
  },
};
