import type { Meta, StoryObj } from '@storybook/react';
import CardImageSelect from './index';

const meta: Meta<typeof CardImageSelect> = {
  title: 'Molecules/CardImageSelect',
  component: CardImageSelect,
  parameters: { layout: 'centered' },
  args: {
    source: { uri: 'https://picsum.photos/seed/marina/192/192' },
    onRemove: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoRemove: Story = { args: { onRemove: undefined } };
