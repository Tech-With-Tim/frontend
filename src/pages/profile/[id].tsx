import React, { useMemo } from "react";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import classNames from "classnames";

import Avatar from "components/Avatar";
import { User } from "types/models.types";
import WithAuth from "components/WithAuth";
import { getAvatarURL } from "utils/discord";
import { useAuthStore } from "stores/useAuthStore";

import styles from "styles/profile.module.scss";

interface Props {
  user?: User & { roles: string[] };
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = ctx.params.id;
  if (!id) {
    return {
      notFound: true,
    };
  }

  if (id == "@me") {
    return {
      props: {
        user: null,
      },
    };
  }

  // fetch user...

  return {
    notFound: true,
  };
};

const Profile: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  user: serverUser,
}) => {
  const Container = serverUser ? React.Fragment : WithAuth;

  const authUser = useAuthStore((s) => s.user);
  const user = useMemo(() => serverUser || authUser, [serverUser, authUser]);

  return (
    <Container>
      <div className="px-12 mt-12 sm:px-14 md:px-18 lg:px-24">
        <div className={classNames("bg-secondary-900 rounded-2xl px-8 py-8", styles["user-info"])}>
          <div className="flex items-center gap-x-4 gap-y-8">
            <div>{user && <Avatar src={getAvatarURL(user)} width={"125"} height={"125"} />}</div>
            <div className="h-full pt-0.1">
              <div className="flex items-end gap-0.5">
                <p className="text-3xl max-h-9 font-semibold">{user?.username}</p>
                <p>#{user?.discriminator}</p>
              </div>
              <div className="mt-1">
                {user?.roles.length ? null : (
                  <p className="text-gray-400 text-xs mt-0.5">
                    The user doesn&apos;t have any roles
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* <div>testing</div> */}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
