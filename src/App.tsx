import React from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./components/Login/Login";
import CallBack from "./components/Login/DiscordCallback";
import {setToken} from "./actions";

import {history} from "./helpers";
import {Router} from "react-router-dom";
import Home from "./components/Home/Home";

interface IProps {
  token: string;
  setToken: Function;
}

class App extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.handleUnload = this.handleUnload.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setToken(token);
      localStorage.removeItem("token");
    }
    window.addEventListener("beforeunload", this.handleUnload)
  }

  handleUnload(e) {
    e.preventDefault();
    const token = this.props.token;
    if (token) {
      localStorage.setItem("token", token);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleUnload)
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={"/login"} component={Login}/>
          <Route path={"/auth/discord/callback"} component={CallBack}/>
          <Route path={"/"} component={Home}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token
  }
}

export default connect(mapStateToProps, {setToken})(App);
