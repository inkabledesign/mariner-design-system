import type { Meta, StoryObj } from '@storybook/react';
import HeaderTopSheet from './index';

const meta: Meta<typeof HeaderTopSheet> = {
  title: 'Molecules/HeaderTopSheet',
  component: HeaderTopSheet,
  parameters: { layout: 'padded' },
  args: { title: 'John Smith', rating: 4.2, subtitle: 'Skipper' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithImage: Story = {
  args: { imageUrl: 'https://picsum.photos/seed/skipper/144/144' },
};
export const Minimal: Story = { args: { rating: undefined, subtitle: undefined } };
