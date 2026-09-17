import type { Meta, StoryObj } from "@storybook/react";
import Row from "../../atoms/Row";
import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Molecules/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  argTypes: {
    type: { control: "select", options: ["default", "icon", "image"] },
    size: { control: { type: "number" } },
  },
  args: { type: "default", size: 72, hasAddButton: true },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
  args: { type: "icon", iconName: "ico-sailor" },
};

export const Image: Story = {
  args: { type: "image", imageUrl: "https://i.pravatar.cc/128" },
};

export const WithoutAddButton: Story = {
  args: { hasAddButton: false },
};

export const InteractiveAddButton: Story = {
  args: { onEditPress: () => {} },
};

export const FigmaVariants: Story = {
  render: () => (
    <Row className="items-center gap-sm">
      <Avatar type="default" />
      <Avatar type="icon" iconName="ico-sailor" />
      <Avatar type="image" imageUrl="https://i.pravatar.cc/128" />
    </Row>
  ),
};
