import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import ListItem from "./index";
import ViewStyled from "../../atoms/ViewStyled";

const meta: Meta<typeof ListItem> = {
  title: "Molecules/ListItem",
  component: ListItem,
  parameters: { layout: "padded" },
  argTypes: {
    leading: {
      control: { type: "select" },
      options: [undefined, "avatar", "icon", "switch", "radio"],
    },
    trailing: {
      control: { type: "select" },
      options: [undefined, "icon", "switch", "radio"],
    },
    themeMode: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
  },
  args: {
    label: "Label",
    title: "Text",
    leading: "icon",
    leadingIconName: "ico-berth-round",
    leadingProgress: 30,
    trailing: "icon",
  },
  decorators: [
    (Story) => (
      <ViewStyled className="w-[310px]">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCaption: Story = {
  args: { caption: "Caption" },
};

export const Avatar: Story = {
  args: { leading: "avatar", leadingProgress: undefined },
};

export const WithValue: Story = {
  args: {
    title: "Distance",
    value: "12 NM",
    trailing: undefined,
  },
};

export const ValueAndChevron: Story = {
  args: {
    title: "Depth",
    value: "4.2 m",
    trailing: "icon",
  },
};

export const TwoTrailingIcons: Story = {
  args: {
    trailing: "icon",
    trailingIconOne: "ico-chevron-right",
    trailingIconTwo: "ico-info-round",
  },
};

export const Switch: Story = {
  args: { trailing: "switch" },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <ListItem
        {...args}
        title={args.title ?? "Notifications"}
        checked={checked}
        onToggle={setChecked}
      />
    );
  },
};

export const Radio: Story = {
  args: { trailing: "radio" },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <ListItem
        {...args}
        title={args.title ?? "Notifications"}
        checked={checked}
        onToggle={setChecked}
      />
    );
  },
};
