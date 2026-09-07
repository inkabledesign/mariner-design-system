import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  args: { title: 'Screen title', variant: 'default' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Search: Story = { args: { variant: 'search', searchPlaceholder: 'Search for marina' } };
export const Transparent: Story = { args: { background: 'transparent' } };
export const Landscape: Story = { args: { orientation: 'landscape' } };
