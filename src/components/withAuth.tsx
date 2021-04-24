import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import Loading from "./Loading/Loading.component";

const withAuth = <T extends Record<string, unknown>>(
  C: React.FC<T>
): ((props: T) => JSX.Element) => {
  const Wrapper = (props: T): JSX.Element => {
    const user = useAuthStore((state) => state.user);
    const hasToken = useAuthStore((state) => !!state.token);

    if (!hasToken || user === null) {
      return <Redirect to="/" />;
    }

    if (user === undefined) {
      return <Loading />;
    }

    return <C {...props} />;
  };

  return Wrapper;
};

export default withAuth;
