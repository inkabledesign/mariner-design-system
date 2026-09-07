import type { Meta, StoryObj } from '@storybook/react';
import WaveDecoration from './index';

const meta: Meta<typeof WaveDecoration> = {
  title: 'Atoms/WaveDecoration',
  component: WaveDecoration,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['long', 'shortL', 'shortR'] },
  },
  args: { variant: 'shortR', color: 'text-brand-accent-100', className: 'w-24 h-3' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccentShort: Story = { args: { variant: 'shortR', color: 'text-brand-accent-100' } };
export const PrimaryLong: Story = {
  args: { variant: 'long', color: 'text-brand-primary-100', className: 'w-40 h-3' },
};
