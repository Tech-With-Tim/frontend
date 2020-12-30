import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

import {getUser} from "../../actions";

import "./profile.scss";
import {getAvatarURI} from "../../helpers";

const Profile = (props) => {
  let {userid} = props;
  const {user, loading, error} = props;

  const {id} = useParams();
  userid = userid || id;

  useEffect(() => {
    if (!props.user && !props.error) {
      props.getUser(userid);
    }
  });

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return error;
  }

  return (<div className={"t-ctr f-col center-div w-fit center-h-v"}>
    <div>
      <img data-testid={"user-pfp"} className={"br-50-p"}
           src={getAvatarURI(user.id, user.avatar, {animated: true})} alt={""}/>
    </div>
    <div>
      <h3 data-testid={"user-user"}>{user.username}#{user.discriminator}</h3>
      <h4 data-testid={"user-id"}>{user.id}</h4>
    </div>
  </div>);
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  };
}

const mapDispatchToProps = {getUser};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
