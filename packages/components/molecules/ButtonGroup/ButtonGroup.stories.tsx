import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ButtonGroup from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
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

const options = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
];

export const Default: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState('day');
    return <ButtonGroup options={options} selectedId={selectedId} onChange={setSelectedId} />;
  },
};
