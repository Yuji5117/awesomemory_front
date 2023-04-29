import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMedium: Story = {
  args: {
    styleType: "default",
    children: "Default",
  },
};

export const DefaultSmall: Story = {
  args: {
    styleType: "default",
    children: "Default",
    size: "sm",
  },
};

export const DefaultLarge: Story = {
  args: {
    styleType: "default",
    children: "Default",
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    styleType: "primary",
    children: "Create Memory",
  },
};

export const PrimarySmall: Story = {
  args: {
    styleType: "primary",
    children: "Create Memory",
    size: "sm",
  },
};

export const PrimaryLarge: Story = {
  args: {
    styleType: "primary",
    children: "Create Memory",
    size: "lg",
  },
};

export const Secondary: Story = {
  args: {
    styleType: "secondary",
    children: "Back",
  },
};

export const SecondarySmall: Story = {
  args: {
    styleType: "secondary",
    children: "Back",
    size: "sm",
  },
};

export const SecondaryLarge: Story = {
  args: {
    styleType: "secondary",
    children: "Back",
    size: "lg",
  },
};
