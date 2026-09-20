import type { Meta, StoryObj } from '@storybook/react';
import InputDate from './index';
import ViewStyled from '../../../atoms/ViewStyled';

const meta: Meta<typeof InputDate> = {
  title: 'Molecules/Input/InputDate',
  component: InputDate,
  parameters: { layout: 'padded' },
  args: { label: 'Date of birth', day: '12', month: '02', year: '1990' },
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
export const Empty: Story = { args: { day: undefined, month: undefined, year: undefined } };
