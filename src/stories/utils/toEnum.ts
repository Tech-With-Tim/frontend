import { ArgType } from "@storybook/addons";

export const toEnum = <T>(...arr: T[]): ArgType => ({
  control: {
    type: "inline-radio",
    options: arr,
  },
});
