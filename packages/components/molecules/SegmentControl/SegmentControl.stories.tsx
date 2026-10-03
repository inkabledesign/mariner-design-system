import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SegmentControl from './index';
import ViewStyled from '../../atoms/ViewStyled';
import type { SegmentControlProps } from './index.types';

const meta: Meta<typeof SegmentControl> = {
  title: 'Molecules/SegmentControl',
  component: SegmentControl,
  parameters: { layout: 'padded' },
  decorators: [
    Story => (
      <ViewStyled className="w-96">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
  { id: 'year', label: 'Year' },
];

const Interactive = (props: Partial<SegmentControlProps>) => {
  const [selectedId, setSelectedId] = useState('day');
  return (
    <SegmentControl
      options={options}
      selectedId={selectedId}
      onChange={setSelectedId}
      {...props}
    />
  );
};

export const Default: Story = { render: () => <Interactive /> };
export const Pill: Story = { render: () => <Interactive shape="pill" /> };
export const Primary: Story = { render: () => <Interactive variant="primary" /> };
export const Small: Story = { render: () => <Interactive size="sm" /> };
export const SmallPill: Story = {
  render: () => <Interactive size="sm" shape="pill" />,
};
