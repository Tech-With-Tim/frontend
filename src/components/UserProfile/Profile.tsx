import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {getUser} from "../../actions";

import "./profile.scss";

const Profile = (props) => {
  let {userid} = props;

  const {id} = useParams();
  userid = userid || id;

  useEffect(() => {
    if (!props.user && !props.loading && !props.error) {
      props.getUser(userid);
    }
  });

  return <div>
    {props.loading ? "Loading..." : props.error ? props.error : JSON.stringify(props.user)}
  </div>
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  };
}

const mapDispatchToProps = {getUser};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
