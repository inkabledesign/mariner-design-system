import type { Meta, StoryObj } from '@storybook/react';
import Tag from './index';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    hasIcon: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
  },
  args: {
    label: "51 30' 40''N, 0 2' 12''W",
    variant: 'primary',
    hasIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const NoIcon: Story = {
  args: { variant: 'secondary', hasIcon: false, label: 'Filter' },
};
