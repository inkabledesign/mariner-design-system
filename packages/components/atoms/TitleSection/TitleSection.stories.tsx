import type { Meta, StoryObj } from '@storybook/react';
import TitleSection from './index';

const meta: Meta<typeof TitleSection> = {
  title: 'Atoms/TitleSection',
  component: TitleSection,
  parameters: { layout: 'padded' },
  argTypes: {
    theme: { control: { type: 'select' }, options: ['light', 'dark', 'accent'] },
    hasIcon: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
  },
  args: { title: 'Most popular marinas', theme: 'light', hasIcon: true },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: { theme: 'light' } };
export const Dark: Story = { args: { theme: 'dark' } };
export const Accent: Story = { args: { theme: 'accent' } };
