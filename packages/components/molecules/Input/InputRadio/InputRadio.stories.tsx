import type { Meta, StoryObj } from '@storybook/react';
import InputRadio from './index';
import ViewStyled from '../../../atoms/ViewStyled';

const meta: Meta<typeof InputRadio> = {
  title: 'Molecules/Input/InputRadio',
  component: InputRadio,
  parameters: { layout: 'padded' },
  argTypes: {
    status: { control: { type: 'select' }, options: ['default', 'error', 'success'] },
    isSelected: { control: { type: 'boolean' } },
  },
  args: { label: 'A power-driven vessel' },
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

export const Default: Story = {};
export const Selected: Story = { args: { isSelected: true } };
export const Error: Story = { args: { status: 'error', isSelected: true, onTrailingPress: () => {} } };
export const Success: Story = { args: { status: 'success', isSelected: true } };
