import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Primary: Story = {
  render: () => <Button intent="primary">Primary</Button>,
};
const Secondary: Story = {
  render: () => <Button intent="secondary">Secondary</Button>,
};
const Tertiary: Story = {
  render: () => <Button intent="tertiary">Tertiary</Button>,
};
const Circular: Story = {
  render: () => <Button intent="circular">Circular</Button>,
};

export default meta;
export { Primary, Secondary, Tertiary, Circular };
