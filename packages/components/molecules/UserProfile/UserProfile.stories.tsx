import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from './index';

const meta: Meta<typeof UserProfile> = {
  title: 'Molecules/UserProfile',
  component: UserProfile,
  parameters: { layout: 'centered' },
  args: { name: 'John Smith', rating: '4.2', qualification: 'Skipper' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithImage: Story = {
  args: { imageUrl: 'https://picsum.photos/seed/skipper/168/168' },
};
export const NoDetails: Story = { args: { rating: undefined, qualification: undefined } };
