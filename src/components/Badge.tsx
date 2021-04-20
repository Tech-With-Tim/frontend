import React, { ImgHTMLAttributes } from "react";

const badges = {};

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  badge: keyof typeof badges;
  occurence: number;
};

const Badge = ({ badge, occurence, ...props }: Props): JSX.Element => {
  return (
    <div>
      <img src={badges[badge]} alt="" {...props} />
      {occurence}
    </div>
  );
};

export default Badge;
