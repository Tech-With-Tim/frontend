import React, { useEffect } from "react";
import { history } from "../../helpers";
import { useAuthStore } from "../../stores/useAuthStore";

import { useLocation } from "react-router-dom";
import Loading from "../Loading/Loading.component";

const WaitForAuth: React.FC = ({ children }) => {
  const user = useAuthStore((s) => s.user);
  const hasToken = useAuthStore((s) => !!s.token);

  const { pathname: location } = useLocation();

  useEffect(() => {
    if (!hasToken) {
      history.push("/login", {
        from: location,
      });
    }
  }, [hasToken]);

  if (!hasToken) {
    return null;
  }

  if (!user) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default WaitForAuth;
