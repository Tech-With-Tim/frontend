import React from "react";
import {connect} from "react-redux";
import {logout} from "../../actions";

function Home(props) {
  return (
    <div className={"t-ctr f-col center-div w-fit center-h-v"}>
      <h3>Hello World</h3>
      {props.auth.token ? <button onClick={() => props.history.push("/profile")}>Profile</button> : null}
      {props.auth.token ? <button onClick={props.logout}>Logout</button> : null}

      {props.auth.token ? null : <button onClick={() => props.history.push("/login")}>Login</button>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: {
      token: state.authReducer.token,
    }
  }
}

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
