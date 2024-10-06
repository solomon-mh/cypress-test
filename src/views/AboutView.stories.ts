import { Meta, StoryFn } from "@storybook/vue3";
import AboutView from "./AboutView.vue";

export default {
  title: "Views/About",
  component: AboutView,
} as Meta<typeof AboutView>;

const Template: StoryFn<typeof AboutView> = (args) => ({
  components: { AboutView },
  setup() {
    return { args };
  },
  template: '<AboutView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
