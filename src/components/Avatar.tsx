import React from "react";
import Image from "next/image";
import classNames from "classnames";

type Props = {
  src: string;
  width: string | number;
  height: string | number;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const Avatar = ({ src, width, height, ...props }: Props): JSX.Element => {
  return (
    <div
      className={classNames(
        "bg-gradient-to-b from-primary to-gray-300 w-max p-1 h-max rounded-full flex items-center justify-center select-none",
        { "cursor-pointer": !!props.onClick }
      )}
      {...props}
    >
      <div className="flex items-center justify-center bg-accent rounded-full p-0.5 w-full h-full">
        <Image src={src} width={width} height={height} className="rounded-full" />
      </div>
    </div>
  );
};

export default Avatar;
