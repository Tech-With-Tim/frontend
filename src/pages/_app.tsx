import React, { useEffect } from "react";
import { AppProps } from "next/app";

import Navbar from "components/Navbar";
import { useAuthStore } from "stores/useAuthStore";

import "styles/tailwind.css";
import "styles/index.scss";

const App = ({ pageProps, Component }: AppProps): JSX.Element => {
  const user = useAuthStore((s) => s.user);
  const hasToken = useAuthStore((s) => !!s.token);
  const fetchUser = useAuthStore((s) => s.fetchUser);

  useEffect(() => {
    if (hasToken) {
      if (!user) {
        fetchUser();
      }
    }
  }, [hasToken, user, fetchUser]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
