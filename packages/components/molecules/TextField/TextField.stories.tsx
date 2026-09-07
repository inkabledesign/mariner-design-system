import type { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const meta: Meta<typeof TextField> = {
  title: 'Molecules/TextField',
  component: TextField,
  parameters: { layout: 'padded' },
  args: { label: 'Notes', placeholder: 'Enter text' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithMessage: Story = { args: { message: 'Helper text goes here' } };
export const Error: Story = { args: { status: 'error', message: 'This field is required' } };
export const Disabled: Story = { args: { status: 'disabled', value: 'Read-only value' } };
