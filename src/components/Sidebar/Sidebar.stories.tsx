import { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";

const meta = {
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMedium: Story = {
  // args: {
  //   styleType: "default",
  //   children: "Default",
  // },
};
