import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import axios from "axios";
import { BACKEND_URL } from "./constants";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

axios.defaults.baseURL = BACKEND_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // no need to spam the api...
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
