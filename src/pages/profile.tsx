import React from "react";
import { NextPage } from "next";
import WithAuth from "../components/WithAuth";
import ProfilePage from "../modules/profile/Profile";

const Profile: NextPage = () => {
  return (
    <WithAuth>
      <ProfilePage />
    </WithAuth>
  );
};

export default Profile;
