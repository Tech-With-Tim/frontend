import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCode } from "../../../actions";

import { useLocation } from "react-router-dom";

function CallBackComponent(props: any) {
  const code = new URLSearchParams(useLocation().search).get("code");
  useEffect(() => {
    if (props.token) {
      return props.history.push("/")
    }
    if (props.error) {
      return props.history.push("/login");
    }
    props.setCode(code);
  });
  return <></>
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    error: state.authReducer.error,
  }
}
const mapDispatchToProps = { setCode };

const CallBack = connect(mapStateToProps, mapDispatchToProps)(CallBackComponent);

export default CallBack;
