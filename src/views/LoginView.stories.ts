import { Meta, StoryFn } from "@storybook/vue3";
import LoginView from "./LoginView.vue";

export default {
  title: "Views/LoginView",
  component: LoginView,
} as Meta<typeof LoginView>;

const Template: StoryFn<typeof LoginView> = (args) => ({
  components: { LoginView },
  setup() {
    return { args };
  },
  template: '<LoginView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
