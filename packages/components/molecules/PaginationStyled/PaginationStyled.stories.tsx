import type { Meta, StoryObj } from '@storybook/react';
import PaginationStyled from './index';

const meta: Meta<typeof PaginationStyled> = {
  title: 'Molecules/PaginationStyled',
  component: PaginationStyled,
  parameters: { layout: 'centered' },
  args: { count: 12, activeIndex: 3 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: { itemStates: { 0: 'correct', 1: 'error', 2: 'correct' } },
};
export const Dot: Story = { args: { variant: 'dot', activeIndex: 1, scrollable: false } };
export const Pressable: Story = { args: { onItemPress: () => {} } };
