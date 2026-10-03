import type { Meta, StoryObj } from '@storybook/react';
import PaginationItem from './index';

const meta: Meta<typeof PaginationItem> = {
  title: 'Atoms/PaginationItem',
  component: PaginationItem,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['number', 'dot'] },
    state: { control: { type: 'select' }, options: ['default', 'active', 'correct'] },
    number: { control: { type: 'number' } },
  },
  args: { variant: 'number', state: 'default', number: 2 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberDefault: Story = { args: { variant: 'number', state: 'default' } };
export const NumberActive: Story = { args: { variant: 'number', state: 'active' } };
export const NumberCorrect: Story = { args: { variant: 'number', state: 'correct' } };
export const DotActive: Story = { args: { variant: 'dot', state: 'active' } };
