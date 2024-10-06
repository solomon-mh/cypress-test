import App from "@/App.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { RouterLinkStub } from "@vue/test-utils";

export default {
  title: "App",
  component: App,
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = (args) => ({
  components: { App },
  setup() {
    return { args };
  },
  template: "<App />",
  global: {
    stubs: {
      "router-view": RouterLinkStub,
    },
  },
});

export const Default = Template.bind({});
Default.args = {};
