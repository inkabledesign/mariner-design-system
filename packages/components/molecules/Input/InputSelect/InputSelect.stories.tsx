import type { Meta, StoryObj } from '@storybook/react';
import InputSelect from './index';
import ViewStyled from '../../../atoms/ViewStyled';

const meta: Meta<typeof InputSelect> = {
  title: 'Molecules/Input/InputSelect',
  component: InputSelect,
  parameters: { layout: 'padded' },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
  args: { placeholder: 'Vessel type', onPress: () => {} },
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
export const Selected: Story = { args: { value: 'Sailing yacht' } };
export const WithIcon: Story = { args: { iconLeft: 'ico-berth-round' } };
export const Disabled: Story = { args: { disabled: true, iconLeft: 'ico-berth-round' } };
