import type { Meta, StoryObj } from '@storybook/react';
import ButtonIcon from './index';

const meta: Meta<typeof ButtonIcon> = {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
  parameters: { layout: 'centered' },
  args: { iconName: 'ico-heart-outline', accessibilityLabel: 'Save' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { isActive: true, iconName: 'ico-heart-full' } };
