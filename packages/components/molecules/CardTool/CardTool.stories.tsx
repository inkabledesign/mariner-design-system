import type { Meta, StoryObj } from '@storybook/react';
import CardTool from './index';

const meta: Meta<typeof CardTool> = {
  title: 'Molecules/CardTool',
  component: CardTool,
  parameters: { layout: 'padded' },
  args: {
    iconName: 'ico-clock',
    title: 'Distress procedures',
    paragraph: 'Emergency steps at a glance',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoDescription: Story = { args: { paragraph: undefined } };
