import React, {useEffect} from "react";
import "./login.scss";
import {connect} from "react-redux";

import {CLIENT_ID, REDIRECT} from "../../config";

const SCOPES = ["identify"];

function format_scope(scopes) {
  return scopes.join(" ");
}

const discordURL = `https://discord.com/api/oauth2/authorize?response_type=code` +
  `&client_id=${CLIENT_ID}&scope=${format_scope(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  `&prompt=consent`;

const Login = (props) => {
  // Change the title to login
  document.title = "Tech With Tim - Login"

  useEffect(() => {
    if (props.token) {
      return props.history.push("/");
    }
  });

  return <div className={"t-ctr f-col center-div w-fit center-h-v"}>
    <h4>Click the button to login using Discord</h4>

    <button onClick={
      () => {
        window.location.href = discordURL;
      }}>Login
    </button>
    {props.error ? <p>{props.error}</p> : null}
  </div>
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    error: state.authReducer.error
  }
}

export default connect(mapStateToProps)(Login);
