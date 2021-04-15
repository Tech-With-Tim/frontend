import React, { Suspense, useEffect } from "react";
import { history } from "./helpers";
import { Router } from "react-router-dom";

import Loading from "./components/Loading/Loading.component";

import { Switch, Route } from "react-router-dom";
import { DiscordCallbackPage, HomePage, LoginPage, Navbar, ProfilePage } from "./pages";
import { useAuthStore } from "./stores/useAuthStore";

const App = (): JSX.Element => {
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
      <Router history={history}>
        {(user && hasToken) || (!hasToken && !user) ? (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Navbar />
            <Switch>
              <Route path={"/login"} exact component={LoginPage} />
              <Route path={"/auth/discord/callback"} exact component={DiscordCallbackPage} />
              <Route path={"/profile"} exact component={ProfilePage} />
              <Route path={"/"} exact component={HomePage} />
            </Switch>
          </Suspense>
        ) : (
          <Loading />
        )}
      </Router>
    </>
  );
};

export default App;
