import React, { useEffect } from "react";
import axios from "axios";
import Loading from "components/Loading/Loading.component";
import { REDIRECT } from "../../../constants";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useAuthStore } from "stores/useAuthStore";

const DiscordCallbackPage = (): JSX.Element => {
  const router = useRouter();
  const setToken = useAuthStore((s) => s.setToken);

  const { code } = router.query;

  useEffect(() => {
    if (!code) {
      router.replace("/");
    }
  }, [code, router]);

  const { isError } = useQuery<{ token: string }>(
    "login callback",
    async () => {
      return await axios
        .post<{ token: string }>(
          "/auth/discord/callback",
          {
            callback: REDIRECT,
            code: router.query.code,
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

  if (isError) {
    return <p>Something unexpected happened</p>;
  }

  return <Loading />;
};

export default DiscordCallbackPage;
