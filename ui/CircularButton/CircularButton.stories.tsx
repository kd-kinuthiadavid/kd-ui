import { Meta, StoryObj } from "@storybook/react";
import CircularButton from ".";

const meta = {
  component: CircularButton,
  tags: ["autodocs"],
} satisfies Meta<typeof CircularButton>;

type Story = StoryObj<typeof meta>;

const Add: Story = {
  render: () => <CircularButton intent="add">Add</CircularButton>,
};
const Convert: Story = {
  render: () => <CircularButton intent="convert">Convert</CircularButton>,
};
const Send: Story = {
  render: () => <CircularButton intent="send">Send</CircularButton>,
};
const Receive: Story = {
  render: () => <CircularButton intent="receive">Receive</CircularButton>,
};

export default meta;
export { Add, Convert, Send, Receive };
