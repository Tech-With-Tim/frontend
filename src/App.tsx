import React from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./components/Login/Login";
import CallBack from "./components/Login/DiscordCallback";
import {setToken} from "./actions";

import {history} from "./helpers";
import {Router} from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/UserProfile/Profile";

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
      <Router history={history}>
        <Switch>
          <Route path={"/login"} component={Login}/>
          <Route path={"/auth/discord/callback"} component={CallBack}/>
          <Route path={"/profile"} render={() => {
            return <Profile userid={"@me"}/>
          }}/>
          {/*<Route path={"/users/:id"} component={Profile}/> TODO: uncomment once api is done*/}
          <Route path={"/"} component={Home}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  }
}

export default connect(mapStateToProps, {setToken})(App);
