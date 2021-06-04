import React from "react";
import Loading from "components/Loading/Loading.component";
import withAuth from "components/withAuth";
import { useAuthStore } from "stores/useAuthStore";
import Title from "components/Title";
import ChallengeHistoryController from "controllers/ChallengeHistoryController";
import { getAvatarURI } from "helpers";

const ProfilePage = (): JSX.Element => {
  const user = useAuthStore((s) => s.user!);

  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <Title>Profile</Title>
      <div className="flex flex-col container flex-grow mt-8 mb-10 overflow-auto">
        <div className="flex bg-blue-gray flex-grow h-full w-full rounded-2xl p-3">
          <div className="grid grid-cols-2 grid-rows-2 flex-grow gap-5">
            <div className="row-span-2 bg-blue-gray-light rounded-2xl px-4 py-3 shadow-xl">
              <h3 className="tracking-widest font-bold text-2xl uppercase">Challenge History</h3>
              <ChallengeHistoryController className="mt-3" />
            </div>
            <div className="row-span-1 bg-blue-gray-light rounded-2xl px-8 py-3 shadow-xl flex items-center gap-3">
              <div className="border-gray-400 border-4 rounded-full p-0.5">
                <img
                  alt=""
                  className="rounded-full"
                  src={getAvatarURI(user.id, user.avatar, { animated: true })}
                />
              </div>
              <div>
                <h4 className="text-3xl font-bold">{user.username}</h4>
                <h6 className="text-sm">#{user.discriminator}</h6>
              </div>
            </div>
            <div className="row-span-1 bg-blue-gray-light rounded-2xl px-4 py-3 shadow-xl">
              Badges. Comming Soon
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ProfilePage);
