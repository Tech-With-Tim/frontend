import React, { useEffect } from "react";

import { CLIENT_ID, REDIRECT } from "../../config";
import { useAuthStore } from "../../stores/useAuthStore";

const SCOPES = ["identify"];

function format_scope(scopes) {
  return scopes.join(" ");
}

const discordURL =
  `https://discord.com/api/oauth2/authorize?response_type=code` +
  `&client_id=${CLIENT_ID}&scope=${format_scope(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  `&prompt=consent`;

const LoginPage = (props: any) => {
  useEffect(() => {
    if (useAuthStore.getState().token) {
      props.history.push("/");
    }
  }, []);

  return (
    <div className={"t-ctr f-col center-div w-fit center-h-v"}>
      <h4>Click the button to login using Discord</h4>

      <a href={discordURL}>Login</a>
      {props.error ? <p>{props.error}</p> : null}
    </div>
  );
};

export default LoginPage;
