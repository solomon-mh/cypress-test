import { Meta, StoryObj } from "@storybook/vue3";
import HelloWorld from "./HelloWorld.vue";

const meta: Meta<typeof HelloWorld> = {
  title: "Components/HelloWorld",
  component: HelloWorld,
  tags: ["autodocs"],
  argTypes: {
    msg: {
      control: "text",
      description: "Message to display in the component",
    },
  },
  args: {
    msg: "Welcome to Your Vue.js + TypeScript App",
  },
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

// Primary story with default message
export const Primary: Story = {
  args: {
    msg: "Welcome to Your Vue.js + TypeScript App",
  },
};

// Secondary story with a different message
export const Secondary: Story = {
  args: {
    msg: "Hello, Storybook!",
  },
};

// Large message story
export const LargeMessage: Story = {
  args: {
    msg: "This is a larger message to showcase the component with more content.",
  },
};

// Short message story
export const ShortMessage: Story = {
  args: {
    msg: "Short msg",
  },
};
