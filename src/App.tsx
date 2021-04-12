import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CallBack from "./components/Login/DiscordCallback/DiscordCallback";
import { setToken } from "./actions";
import { history } from "./helpers";
import { Router } from "react-router-dom";
import { HomePage, LoginPage, ProfilePage } from "./components/pages";

import Loading from "./components/Others/Loading/Loading.component";

const Navbar = React.lazy(
  () => import(/* webpackChunkName: "nav" */ "./components/Navbar/Navbar")
);

interface IProps {
  token: string;
  setToken: Function;
}

class App extends React.Component<IProps> {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setToken(token);
    }
  }

  render() {
    return (
      <>
        <Router history={history}>
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
              <Route
                path={"/auth/discord/callback"}
                exact
                component={CallBack}
              />
              <Route
                path={"/profile"}
                exact
                render={() => {
                  return <ProfilePage userid={"@me"} />;
                }}
              />
              {/*<Route path={"/users/:id"} component={Profile}/> TODO: uncomment once api is done*/}
              <Route path={"/"} exact component={HomePage} />
            </Switch>
          </Suspense>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps, { setToken })(App);
