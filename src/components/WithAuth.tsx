import React from "react";
import { useAuthStore } from "stores/useAuthStore";

const WithAuth: React.FC = ({ children }) => {
  const user = useAuthStore((s) => s.user);
  const hasToken = useAuthStore((s) => !!s.token);

  if (!hasToken) {
    return <p>no access</p>;
  }

  if (user === undefined) {
    return <>loading...</>;
  }

  if (user == null) {
    return <p>error fetching user</p>;
  }

  return <>{children}</>;
};

export default WithAuth;
