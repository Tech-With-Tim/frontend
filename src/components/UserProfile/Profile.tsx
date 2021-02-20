import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../../actions";

import { getAvatarURI } from "../../helpers";

const Profile = (props: any) => {
  let { userid } = props;
  const { user, loading, error } = props;

  const { id } = useParams();
  userid = userid || id;

  useEffect(() => {
    if (!props.user && !props.error) {
      props.getUser(userid);
    }
  });

  if ((loading || !user) && !error) {
    return "Loading...";
  }

  if (error) {
    return <p data-testid={"user-error"}>{error}</p>;
  }

  return (<div className={"t-ctr f-col center-div w-fit center-h-v"}>
    <div>
      <img data-testid={"user-pfp"} className={"br-50-p"}
        src={getAvatarURI(user.id, user.avatar, { animated: true })} alt={"User pfp"} />
    </div>
    <div>
      <h3 data-testid={"user-user"}>{user.username}#{user.discriminator}</h3>
      <h5 data-testid={"user-id"}>User id: {user.id}</h5>
    </div>
  </div>);
}

const mapStateToProps = state => {
  return {
    ...state.profileReducer
  };
}

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
