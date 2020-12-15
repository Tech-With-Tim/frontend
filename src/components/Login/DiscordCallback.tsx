import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setCode} from "../../actions";

import {useLocation} from "react-router-dom";

function CallBackComponent(props) {
  const code = new URLSearchParams(useLocation().search).get("code");
  useEffect(() => {
    if (props.token){
      return props.history.push("/")
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
const mapDispatchToProps = {setCode};

const CallBack = connect(mapStateToProps, mapDispatchToProps)(CallBackComponent);

export default CallBack;
