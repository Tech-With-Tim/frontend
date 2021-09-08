import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import Loading from "./Loading";
import { useAuthStore } from "stores/useAuthStore";

const WithAuth: React.FC = ({ children }) => {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.token);

  useEffect(() => {
    if (!token) {
      router.push("/");
      toast.error("You need to be logged in to access that page");
    }
  }, [token, router]);

  if (token && !user) {
    return <Loading />;
  }

  if (!token) {
    return <></>;
  }

  return <>{children}</>;
};

export default WithAuth;
