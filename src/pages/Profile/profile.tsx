import React from "react";

import { getAvatarURI } from "../../helpers";

import {
  ProfileContainer,
  ProfileInfoContainer,
  BigProfileInfoContainer,
  ProfileInfo,
  UserPic,
  ProfileHeader,
} from "./Styles";

import ChallengeHistoryCard from "./ChallengeHistoryCard.component";
import Loading from "../../components/Loading/Loading.component";
import Badge from "./Badge.component";
import { BADGENAMES } from "./constants";
import { useAuthStore } from "../../stores/useAuthStore";
import WaitForAuth from "../../components/WaitForAuth/WaitForAuth";

const challengeList = [
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

const badgeList = [
  {
    name: BADGENAMES.Badge1,
    occurence: 5,
  },

  {
    name: BADGENAMES.Badge2,
    occurence: 3,
  },

  {
    name: BADGENAMES.Badge3,
    occurence: 7,
  },
];

const ProfilePage = () => {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Loading />;
  }

  return (
    <WaitForAuth>
      <ProfileHeader>Profile</ProfileHeader>
      <ProfileContainer>
        <BigProfileInfoContainer>
          <ProfileInfo>
            <h1>Challenge History</h1>
            {challengeList.map((challenge) => {
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
        <ProfileInfo>
          <ProfileInfoContainer>
            <div className="profile">
              <UserPic>
                <img
                  data-testid={"user-pfp"}
                  className={"br-50-p"}
                  src={getAvatarURI(user.id, user.avatar, { animated: true })}
                  alt={"User pfp"}
                />
              </UserPic>
            </div>
            <div className="profile-name">
              <h5 data-testid={"user-user"}>{user.username}</h5>
              <h4 data-testid={"user-discriminator"}>#{user.discriminator}</h4>
              {/* <h5 data-testid={"user-id"}>User id: {user.id}</h5> */}
            </div>
          </ProfileInfoContainer>
        </ProfileInfo>
        <ProfileInfoContainer style={{ marginTop: 0 }}>
          {badgeList.map((badge) => {
            return (
              <Badge
                key={badge.name}
                name={badge.name}
                occurence={badge.occurence}
              />
            );
          })}
        </ProfileInfoContainer>
      </ProfileContainer>
    </WaitForAuth>
  );
};

export default ProfilePage;
