import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    handleButtonClick: {
      description: "Callback function to handle user clicks",
      name: "handleButtonClick",
      defaultValue: () => alert("Button Clicked"),
    },
    fullWidth: {
      name: "fullWidth",
      description: "Should this button span the entire width?",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    intent: {
      control: {
        type: "text",
      },
      options: ["primary", "secondary", "tertiary"],
      defaultValue: "primary",
      description: "How do you intend to use this button?",
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

function handleButtonClick() {
  alert("Button Clicked!");
}

const Primary: Story = {
  render: () => (
    <Button intent="primary" handleButtonClick={handleButtonClick}>
      Primary
    </Button>
  ),
};
const Secondary: Story = {
  render: () => (
    <Button intent="secondary" handleButtonClick={handleButtonClick}>
      Secondary
    </Button>
  ),
};
const Tertiary: Story = {
  render: () => (
    <Button intent="tertiary" handleButtonClick={handleButtonClick}>
      Tertiary
    </Button>
  ),
};

export default meta;
export { Primary, Secondary, Tertiary };
