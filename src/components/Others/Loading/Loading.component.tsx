import React from "react";
import { Overlay, Spinner } from "./Styles";

function Loading() {
  return (
    <>
      <Overlay>
        <Spinner />
      </Overlay>
    </>
  );
}

export default Loading;
