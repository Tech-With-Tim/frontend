import WithAuth from "components/WithAuth";
import ProfilePage from "modules/profile/Profile";
import { NextPage } from "next";
import React from "react";

const Profile: NextPage = () => {
  return (
    <WithAuth>
      <ProfilePage />
    </WithAuth>
  );
};

export default Profile;
