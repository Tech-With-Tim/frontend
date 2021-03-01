import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../../actions";

import { getAvatarURI } from "../../helpers";

import { ProfileContainer, ProfileInfoContainer, ProfileInfo } from "./Styles";

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
      <div className={"t-ctr f-col center-div w-fit center-h-v"}>
        <div>
          <img
            data-testid={"user-pfp"}
            className={"br-50-p"}
            src={getAvatarURI(user.id, user.avatar, { animated: true })}
            alt={"User pfp"}
          />
        </div>
        <div>
          <h3 data-testid={"user-user"}>
            {user.username}#{user.discriminator}
          </h3>
          <h5 data-testid={"user-id"}>User id: {user.id}</h5>
        </div>
      </div>
      <ProfileContainer>
        <ProfileInfoContainer>
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
