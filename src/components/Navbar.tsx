import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import Avatar from "./Avatar";
import logo from "images/logo.png";
import DiscordIcon from "icons/Discord";
import { getAvatarURL } from "utils/discord";
import { useAuthStore } from "stores/useAuthStore";

const Navbar = (): JSX.Element => {
  const user = useAuthStore((s) => s.user);

  const redirect = useMemo(
    () =>
      `${process.env.API_URI}/auth/discord/redirect?callback=${process.env.origin}/auth/discord/callback`,
    []
  );

  return (
    <nav className="px-8 py-4 flex gap-10 items-center">
      <div>
        <Image src={logo} width={56} height={56} layout="fixed" />
      </div>
      <ul className="flex gap-7 font-bold items-center flex-grow">
        <li>Home</li>
        <li>Events</li>
        <li>Community</li>
      </ul>
      <div>
        {user ? (
          <Link href="/profile/@me">
            <Avatar src={getAvatarURL(user)} width={45} height={45} />
          </Link>
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
