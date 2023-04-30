import { Meta, StoryObj } from "@storybook/react";

import { SidebarItem } from "./SidebarItem";

const meta = {
  component: SidebarItem,
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMedium: Story = {
  args: {
    children: "Default",
  },
};

export const SelectedLarge: Story = {
  args: {
    children: "Default",
    size: "lg",
    isSelected: true,
  },
};
