import React, { useEffect } from "react";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "stores/useAuthStore";
import { useRouter } from "next/dist/client/router";

type Status = "SUCCESS" | "FAILED";

interface Props {
  data?: { token: string; exp: string };
  status: Status;
  code?: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const code = ctx.query?.code;

  if (!code) {
    return {
      notFound: true,
    };
  }

  return await axios
    .post(
      "/auth/discord/callback",
      {
        code,
        callback: `${process.env.origin}/auth/discord/callback`,
      },
      {
        baseURL: process.env.SERVER_API_URI,
      }
    )
    .then((res) => ({
      props: {
        status: "SUCCESS" as Status,
        data: res.data,
      },
    }))
    .catch((e: AxiosError) => {
      console.log(e);
      return {
        props: {
          status: "FAILED" as Status,
          code: e.response?.status || null,
        },
      };
    });
};

const Callback: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const router = useRouter();
  const { setToken, fetchUser } = useAuthStore();

  useEffect(() => {
    router.replace("/");
    if (props.status == "SUCCESS") {
      toast.success("Logged in successfully");

      setToken(props.data.token);
      fetchUser();
      localStorage.setItem("token", props.data.token);
    } else {
      toast.error("Failed to login fsr :(");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Callback;
