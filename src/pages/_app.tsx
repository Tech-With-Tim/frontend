import React, { useEffect } from "react";
import { AppProps } from "next/app";
import axios from "axios";

import Navbar from "components/Navbar";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "stores/useAuthStore";

import "styles/tailwind.css";
import "styles/index.scss";

axios.defaults.baseURL = process.env.API_URI;

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
      <Toaster
        position="top-right"
        toastOptions={{ style: { backgroundColor: "#21232c", color: "white" } }}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
