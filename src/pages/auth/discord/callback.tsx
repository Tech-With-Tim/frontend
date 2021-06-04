import React from "react";
import axios from "axios";
import Loading from "components/Loading/Loading.component";
import { REDIRECT } from "../../../constants";
import { useURLQuery } from "hooks/useURLQuery";
import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import { useAuthStore } from "stores/useAuthStore";

const DiscordCallbackPage = (): JSX.Element => {
  const query = useURLQuery();
  const setToken = useAuthStore((s) => s.setToken);
  const router = useRouter();

  useQuery<{ token: string }>(
    "login callback",
    async () => {
      return await axios
        .post<{ token: string }>(
          "/auth/discord/callback",
          {
            callback: REDIRECT,
            code: query.get("code"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => res.data);
    },
    {
      onSuccess: ({ token }) => {
        setToken(token);
        router.push("/");
      },
    }
  );

  return <Loading />;
};

export default DiscordCallbackPage;
