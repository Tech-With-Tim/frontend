import React from "react";
import { toStr } from "./utils/toStr";
import { toEnum } from "./utils/toEnum";
import { Story } from "@storybook/react";
import { toBoolean } from "./utils/toBool";
import { Button as ButtonComponent } from "../components/Button";

export default {
  title: "Button",
  argTypes: {
    children: toStr(),
    loading: toBoolean(),
    disabled: toBoolean(),
    color: toEnum("primary", "secondary"),
  },
  args: {
    color: "primary",
    children: "Button",
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const Button = ButtonComponent.bind({}) as Story;
