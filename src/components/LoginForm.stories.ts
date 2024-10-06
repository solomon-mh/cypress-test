import { Meta, StoryObj } from "@storybook/vue3";
import LoginForm from "./LoginForm.vue";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
