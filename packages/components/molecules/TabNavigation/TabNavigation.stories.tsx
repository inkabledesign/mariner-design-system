import type { Meta, StoryObj } from '@storybook/react';
import TabNavigation from './index';

const meta: Meta<typeof TabNavigation> = {
  title: 'Molecules/TabNavigation',
  component: TabNavigation,
  parameters: { layout: 'padded' },
  args: {
    tabs: [
      { id: 'mayday', label: 'Mayday' },
      { id: 'panpan', label: 'PanPan' },
      { id: 'securite', label: 'Securité' },
    ],
    activeTabId: 'mayday',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SecondTab: Story = { args: { activeTabId: 'panpan' } };
