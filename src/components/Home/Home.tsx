import React from "react";
import {connect} from "react-redux";
import {logout} from "../../actions";

function Home(props) {
  return (
    <div>
      <p>Hello World</p>
      {props.auth.token ? <button onClick={props.logout}>Logout</button>: null}
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
