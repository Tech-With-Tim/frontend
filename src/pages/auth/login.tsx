import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { CLIENT_ID, REDIRECT } from "../../config";
import { useAuthStore } from "../../stores/useAuthStore";

const SCOPES = ["identify"];

function format_scope(scopes) {
  return scopes.join(" ");
}

const discordURL =
  "https://discord.com/api/oauth2/authorize?response_type=code" +
  `&client_id=${CLIENT_ID}&scope=${format_scope(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  "&prompt=consent";

const LoginPage = (props: RouteComponentProps): JSX.Element => {
  useEffect(() => {
    if (useAuthStore.getState().token) {
      props.history.push("/");
    }
  }, [props.history]);

  return (
    <div className={"t-ctr f-col center-div w-fit center-h-v"}>
      <h4>Click the button to login using Discord</h4>

      <a href={discordURL}>Login</a>
    </div>
  );
};

export default LoginPage;
