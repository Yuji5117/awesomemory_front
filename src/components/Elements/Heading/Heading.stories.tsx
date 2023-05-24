import { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";

const meta = {
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "This is Heading Component",
  },
};

export const Heading2: Story = {
  args: {
    headingLevel: "h2",
    children: "This is Heading Component",
  },
};

export const Heading3: Story = {
  args: {
    headingLevel: "h3",
    children: "This is Heading Component",
  },
};

export const Heading4: Story = {
  args: {
    headingLevel: "h4",
    children: "This is Heading Component",
  },
};

export const Heading5: Story = {
  args: {
    headingLevel: "h5",
    children: "This is Heading Component",
  },
};
