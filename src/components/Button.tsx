import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import cb from "classnames";
import Spinner from "./Spinner";

const colorSchemas = {
  primary: "bg-secondary disabled:bg-primary-lighter hover:bg-primary-hover",
  secondary: "bg-white text-secondary",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  icon?: React.ReactNode;
  color?: keyof typeof colorSchemas;
};

export const Button: React.FC<ButtonProps> = ({
  icon,
  loading,
  children,
  disabled,
  className,
  color = "primary",
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={cb(
        className,
        colorSchemas[color],
        "cursor-pointer flex items-center relative justify-center font-semibold tracking-wide px-5 py-1 rounded-full focus:outline-none hover:opacity-70"
      )}
      {...props}
    >
      <span className={loading ? "opacity-0" : "flex items-center"}>
        {icon ? <span className={"mr-2 items-center"}>{icon}</span> : null}
        {children}
      </span>
      {loading ? (
        <span className={"absolute"}>
          <Spinner color={color === "primary" ? "white" : "#E94E1B"} />
        </span>
      ) : null}
    </button>
  );
};
