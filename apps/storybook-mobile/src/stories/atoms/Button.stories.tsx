import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mariner/components';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Text: Story = {
  args: {
    text: 'Text Button',
    variant: 'text',
    size: 'md',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    iconLeft: {
      iconType: 'system',
      iconName: 'ico-plus',
    },
  },
};
