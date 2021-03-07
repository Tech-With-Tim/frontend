import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../../actions";

import { getAvatarURI } from "../../helpers";

import {
  ProfileContainer,
  ProfileInfoContainer,
  BigProfileInfoContainer,
  ProfileInfo,
  UserPic,
} from "./Styles";

import ChallengeHistoryCard from "./ChallengeHistoryCard.component";

const challenges = [
  {
    no: 1,
    solution: "passed",
    difficulty: "easy",
  },
  {
    no: 2,
    solution: "passed",
    difficulty: "medium",
  },
  {
    no: 3,
    solution: "failed",
    difficulty: "hard",
  },
  {
    no: 4,
    solution: "passed",
    difficulty: "easy",
  },
  {
    no: 5,
    solution: "passed",
    difficulty: "medium",
  },
  {
    no: 6,
    solution: "failed",
    difficulty: "hard",
  },
];

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

  return (
    <div>
      <ProfileContainer>
        <BigProfileInfoContainer>
          <ProfileInfo>
            <h1>Challenge History</h1>
            {challenges.map(challenge => {
              return (
                <div key={challenge.no}>
                  <ChallengeHistoryCard
                    no={challenge.no}
                    key={challenge.no}
                    difficulty={challenge.difficulty}
                    solution={challenge.solution}
                  />
                </div>
              );
            })}
          </ProfileInfo>
        </BigProfileInfoContainer>
        <ProfileInfoContainer>
          <ProfileInfo>
            <div>
              <UserPic>
                <img
                  data-testid={"user-pfp"}
                  className={"br-50-p"}
                  src={getAvatarURI(user.id, user.avatar, { animated: true })}
                  alt={"User pfp"}
                />
              </UserPic>
              <div>
                <h5 data-testid={"user-user"}>{user.username}</h5>
                <h4>#{user.discriminator}</h4>
                {/* <h5 data-testid={"user-id"}>User id: {user.id}</h5> */}
              </div>
            </div>
          </ProfileInfo>
        </ProfileInfoContainer>
        <ProfileInfoContainer>
          <ProfileInfo></ProfileInfo>
        </ProfileInfoContainer>
      </ProfileContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.profileReducer,
  };
};

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
