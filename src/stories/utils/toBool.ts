import { ArgType } from "@storybook/addons";

export const toBoolean = (): ArgType => ({
  control: {
    type: "boolean",
  },
});
