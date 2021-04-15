import React from "react";
import { Overlay, Spinner } from "./Styles";

function Loading(): JSX.Element {
  return (
    <>
      <Overlay>
        <Spinner />
      </Overlay>
    </>
  );
}

export default Loading;
