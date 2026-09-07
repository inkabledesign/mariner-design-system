import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Molecules/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  argTypes: { size: { control: { type: 'number' } } },
  args: { size: 64, imageUrl: 'https://i.pravatar.cc/128' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = { args: { imageUrl: 'https://i.pravatar.cc/128' } };
export const IconFallback: Story = { args: { imageUrl: undefined, iconName: 'ico-sailor-round' } };
export const Editable: Story = { args: { onEditPress: () => {} } };
