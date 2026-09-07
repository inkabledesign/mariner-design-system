import type { Meta, StoryObj } from '@storybook/react';
import EssentialToolsSection from './index';

const meta: Meta<typeof EssentialToolsSection> = {
  title: 'Organisms/EssentialToolsSection',
  component: EssentialToolsSection,
  parameters: { layout: 'padded' },
  args: {
    tools: [
      { id: '1', iconName: 'ico-clock', title: 'Distress procedures', description: 'Emergency steps' },
      { id: '2', iconName: 'ico-tick-round', title: 'Safety checklist', description: 'Pre-departure' },
      { id: '3', iconName: 'ico-pin-round', title: 'Navigation marks', description: 'IALA buoyage' },
      { id: '4', iconName: 'ico-info-round', title: 'Phonetic alphabet', description: 'Radio calls' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TwoTools: Story = {
  args: {
    tools: [
      { id: '1', iconName: 'ico-clock', title: 'Distress procedures' },
      { id: '2', iconName: 'ico-tick-round', title: 'Safety checklist' },
    ],
  },
};
