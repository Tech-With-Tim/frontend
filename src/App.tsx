import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login/Login";
import CallBack from "./components/Login/DiscordCallback/DiscordCallback";
import { setToken } from "./actions";

import { history } from "./helpers";
import { Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/UserProfile/Profile";
import Navbar from "./components/Navbar/Navbar";

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
          <Navbar />
          <Switch>
            <Route path={"/login"} exact component={Login} />
            <Route path={"/auth/discord/callback"} exact component={CallBack} />
            <Route path={"/profile"} exact render={() => {
              return <Profile userid={"@me"} />
            }} />
            {/*<Route path={"/users/:id"} component={Profile}/> TODO: uncomment once api is done*/}
            <Route path={"/"} exact component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  }
}

export default connect(mapStateToProps, { setToken })(App);
