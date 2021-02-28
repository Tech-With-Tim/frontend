import React from "react";

import { InfoCardContainer } from "./Styles";

export const InfoCard = (props) => {
  // TODO: add some cool stuff here
  return <InfoCardContainer {...props}>{props.children}</InfoCardContainer>;
};
