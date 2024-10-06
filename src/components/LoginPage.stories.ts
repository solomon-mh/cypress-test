import { Meta, StoryObj } from "@storybook/vue3";
import LoginPage from "./LoginPage.vue";

const meta: Meta<typeof LoginPage> = {
  title: "Pages/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};
