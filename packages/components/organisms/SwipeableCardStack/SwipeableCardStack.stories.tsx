import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SwipeableCardStack from './index';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';

const DemoCard = ({ label }: { label: string }) => (
  <ViewStyled className="w-[280px] h-[360px] rounded-lg bg-brand-primary-100 items-center justify-center">
    <TextStyled textStyle="heading4" className="text-material-surface-0">
      {label}
    </TextStyled>
  </ViewStyled>
);

const meta: Meta<typeof SwipeableCardStack<{ label: string }>> = {
  title: 'Organisms/SwipeableCardStack',
  component: SwipeableCardStack,
  parameters: { layout: 'centered' },
  args: {
    data: [{ label: 'Card 1' }, { label: 'Card 2' }, { label: 'Card 3' }],
    currentIndex: 0,
    renderCard: item => <DemoCard label={item.label} />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Second: Story = { args: { currentIndex: 1 } };
