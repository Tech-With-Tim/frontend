import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

import Navbar from "components/Navbar/Navbar";
import PageContainer from "components/PageContainer";
import { BACKEND_URL } from "../constants";
import { useAuthStore } from "stores/useAuthStore";

import "styles/tailwind.css";
import "styles/index.scss";

axios.defaults.baseURL = BACKEND_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // no need to spam the api...
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
