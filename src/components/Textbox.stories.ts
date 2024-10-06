import { Meta, StoryObj } from "@storybook/vue3";
import Textbox from "./Textbox.vue";

const meta: Meta<typeof Textbox> = {
  title: "Components/Textbox",
  component: Textbox,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text",
    type: "text",
    modelValue: "",
  },
};

export default meta;
type Story = StoryObj<typeof Textbox>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter password",
    type: "password",
  },
};
