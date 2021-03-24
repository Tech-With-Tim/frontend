import React from "react";
import { BadgeOccurence } from "./Styles";
import Badge1 from "./Assets/badge1.svg";
import Badge2 from "./Assets/badge2.svg";
import Badge3 from "./Assets/badge3.svg";
import { BADGENAMES } from "./constants";

interface Props {
  name: string;
  occurence: number;
}

function Badge({ name, occurence }: Props) {
  let image;

  switch (name) {
    case BADGENAMES.Badge1:
      image = Badge1;
      break;
    case BADGENAMES.Badge2:
      image = Badge2;
      break;
    case BADGENAMES.Badge3:
      image = Badge3;
      break;
    default:
      break;
  }

  return (
    <div>
      <img src={`${image}`} alt={`${name} X ${occurence}`} />
      <BadgeOccurence>{occurence}</BadgeOccurence>
    </div>
  );
}

export default Badge;
