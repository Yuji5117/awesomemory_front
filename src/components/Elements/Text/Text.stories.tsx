import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    children: "Default",
  },
};

export const Large: Story = {
  args: {
    children: "Default",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Default",
    size: "sm",
  },
};
export const XSmall: Story = {
  args: {
    children: "Default",
    size: "xs",
  },
};
