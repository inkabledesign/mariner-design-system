import type { Meta, StoryObj } from '@storybook/react';
import SoundShapes from './index';

const meta: Meta<typeof SoundShapes> = {
  title: 'Molecules/SoundShapes',
  component: SoundShapes,
  parameters: { layout: 'padded' },
  args: { signal: { signalSounds: ['short', 'long', 'short', 'short', 'long'] } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllShort: Story = {
  args: { signal: { signalSounds: ['short', 'short', 'short'] } },
};
export const AllLong: Story = { args: { signal: { signalSounds: ['long', 'long'] } } };
