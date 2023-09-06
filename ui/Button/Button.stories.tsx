import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { text } from "stream/consumers";

const meta = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    handleButtonClick: {
      description: "Callback function to handle user clicks",
      name: "handleButtonClick",
    },
    fullWidth: {
      name: "fullWidth",
      description: "Should this button span the entire width?",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    intent: {
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary"],
      defaultValue: "primary",
      description: "How do you intend to use this button?",
      name: "Intent",
    },
    size: {
      description: "size of the button",
      name: "Size",
      options: ["small", "medium", "large", "xl"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    text: {
      name: "Text",
      description: "The text to be displayed on the button",
      table: {
        defaultValue: { summary: "Hello" },
      },
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

function handleButtonClick() {
  alert("Button Clicked!");
}

export const Primary: Story = {
  args: {
    intent: "primary",
    text: "Hello",
    handleButtonClick: handleButtonClick,
  },
};
export default meta;