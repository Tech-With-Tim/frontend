import React, { useMemo } from "react";
import Image from "next/image";

import Avatar from "./Avatar";
import logo from "images/logo.png";
import DiscordIcon from "icons/Discord";
import { getAvatarURL } from "utils/discord";
import { useAuthStore } from "stores/useAuthStore";

const Navbar = (): JSX.Element => {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const redirect = useMemo(
    () =>
      `${process.env.API_URI}/auth/discord/redirect?callback=${process.env.origin}/auth/discord/callback`,
    []
  );

  return (
    <nav className="px-8 py-4 flex gap-10 items-center">
      <div className="w-14 h-14">
        <Image src={logo} />
      </div>
      <ul className="flex gap-4 items-center flex-grow">
        <li>Home</li>
        <li>Events</li>
        <li>Community</li>
      </ul>
      <div>
        {user ? (
          <Avatar onClick={logout} src={getAvatarURL(user)} width={50} height={50} />
        ) : (
          <a
            href={redirect}
            className="bg-blurple px-5 py-1.5 rounded-md flex gap-2 items-center text-sm"
          >
            <DiscordIcon className="w-6 h-6" />
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
