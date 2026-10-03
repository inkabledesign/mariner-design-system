import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import FormItem from './index';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
import InputRadio from '../InputRadio';
import InputDate from '../InputDate';
import ViewStyled from '../../../atoms/ViewStyled';
import Column from '../../../atoms/Column';

const meta: Meta<typeof FormItem> = {
  title: 'Molecules/Input/FormItem',
  component: FormItem,
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
  args: { label: 'Label text' },
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

export const WithInputText: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <FormItem {...args}>
        <InputText
          placeholder="Input placeholder"
          iconLeft="ico-berth-round"
          value={value}
          onChangeText={setValue}
        />
      </FormItem>
    );
  },
};

export const WithError: Story = {
  args: { error: 'Error' },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <FormItem {...args}>
        <InputText placeholder="Input placeholder" value={value} onChangeText={setValue} />
      </FormItem>
    );
  },
};

export const WithInputSelect: Story = {
  args: { label: 'Vessel type' },
  render: (args) => (
    <FormItem {...args}>
      <InputSelect placeholder="Select a vessel type" onPress={() => {}} />
    </FormItem>
  ),
};

export const WithInputRadio: Story = {
  args: { label: 'Give way' },
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return (
      <FormItem {...args}>
        <Column className="gap-sm">
          {['A power-driven vessel', 'A sailing vessel', 'A fishing vessel'].map((label, i) => (
            <InputRadio
              key={label}
              label={label}
              isSelected={selected === i}
              onPress={() => setSelected(i)}
            />
          ))}
        </Column>
      </FormItem>
    );
  },
};

export const WithInputDate: Story = {
  args: { label: 'Date of birth' },
  render: (args) => (
    <FormItem {...args}>
      <InputDate day="12" month="02" year="1990" onPress={() => {}} />
    </FormItem>
  ),
};
