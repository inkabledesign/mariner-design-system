import type { Meta, StoryObj } from '@storybook/react';
import TitleSectionLRG from './index';

const meta: Meta<typeof TitleSectionLRG> = {
  title: 'Atoms/TitleSectionLRG',
  component: TitleSectionLRG,
  parameters: { layout: 'padded' },
  argTypes: { title: { control: { type: 'text' } } },
  args: { title: 'Amenities' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
