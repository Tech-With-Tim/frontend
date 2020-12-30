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

  // Change title to the user's name
  document.title = `${user.username} - Profile`

  return (<div className={"t-ctr f-col center-div w-fit center-h-v"}>
    <div>
      <img data-testid={"user-pfp"} className={"br-50-p"}
           src={getAvatarURI(user.id, user.avatar, {animated: true})} alt={"User pfp"}/>
    </div>
    <div>
      <h3 data-testid={"user-user"}>{user.username}#{user.discriminator}</h3>
      <h5 data-testid={"user-id"}>User id: {user.id}</h5>
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
