import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import TabBar from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof TabBar> = {
  title: 'Molecules/TabBar',
  component: TabBar,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <ViewStyled className="w-80">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    return <TabBar tabs={tabs} selectedIndex={selected} onChange={setSelected} />;
  },
};
