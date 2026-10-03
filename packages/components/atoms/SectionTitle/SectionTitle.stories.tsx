import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from './index';

const meta: Meta<typeof SectionTitle> = {
  title: 'Atoms/SectionTitle',
  component: SectionTitle,
  parameters: { layout: 'padded' },
  args: { children: 'Introduction to Marine VHF' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
