import type { Meta, StoryObj } from '@storybook/react';
import TextStyled from './index';

const meta: Meta<typeof TextStyled> = {
  title: 'Atoms/TextStyled',
  component: TextStyled,
  parameters: { layout: 'padded' },
  argTypes: {
    textStyle: {
      control: { type: 'select' },
      options: [
        'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6',
        'body', 'button', 'input', 'placeholder', 'caption', 'label', 'footnote', 'link',
      ],
    },
    children: { control: { type: 'text' } },
  },
  args: { textStyle: 'heading3', children: 'The quick brown fox' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = { args: { textStyle: 'heading3' } };
export const Body: Story = { args: { textStyle: 'body' } };
export const Caption: Story = { args: { textStyle: 'caption' } };
