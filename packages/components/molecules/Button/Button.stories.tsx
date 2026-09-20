import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'text'] },
    radius: { control: { type: 'select' }, options: ['round', 'none'] },
    size: { control: { type: 'select' }, options: ['md', 'lg'] },
    iconPosition: { control: { type: 'select' }, options: ['none', 'left', 'right'] },
    disabled: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
  },
  args: { text: 'Button text', variant: 'primary', radius: 'round', size: 'lg', iconPosition: 'none' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Text: Story = { args: { variant: 'text' } };
export const WithLeftIcon: Story = {
  args: { variant: 'primary', iconPosition: 'left', iconName: 'ico-tick-round', iconType: 'input' },
};
export const Medium: Story = { args: { variant: 'primary', size: 'md' } };
export const MediumWithIcon: Story = {
  args: { variant: 'primary', size: 'md', iconPosition: 'left', iconName: 'ico-tick-round', iconType: 'input' },
};
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
