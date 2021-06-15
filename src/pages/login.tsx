import { REDIRECT, CLIENT_ID } from "../constants";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useAuthStore } from "stores/useAuthStore";

const SCOPES = ["identify"];

function format_scope(scopes) {
  return scopes.join(" ");
}

const discordURL =
  "https://discord.com/api/oauth2/authorize?response_type=code" +
  `&client_id=${CLIENT_ID}&scope=${format_scope(SCOPES)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  "&prompt=consent";

const LoginPage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (useAuthStore.getState().token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className={"t-ctr f-col center-div w-fit center-h-v"}>
      <h4>Click the button to login using Discord</h4>

      <a href={discordURL}>Login</a>
    </div>
  );
};

export default LoginPage;
