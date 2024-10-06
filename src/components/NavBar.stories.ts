import { Meta, StoryObj } from "@storybook/vue3";
import NavBar from "./NavBar.vue";

const meta: Meta<typeof NavBar> = {
  title: "Components/Navbar",
  component: NavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
