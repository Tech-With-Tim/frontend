import React, { useMemo } from "react";
import Image from "next/image";

import logo from "images/logo.png";
import DiscordIcon from "icons/Discord";

const Navbar = (): JSX.Element => {
  const redirect = useMemo(
    () =>
      `${process.env.API_URI}/auth/discord/redirect?callback=${process.env.origin}/auth/discord/callback`,
    []
  );

  return (
    <nav className="px-8 py-4 flex gap-7 items-center">
      <div className="w-12 h-12">
        <Image src={logo} />
      </div>
      <ul className="flex gap-4 items-center flex-grow">
        <li>Home</li>
        <li>Events</li>
        <li>Community</li>
      </ul>
      <div>
        <a href={redirect} className="bg-blurple px-5 py-1.5 rounded-md flex gap-2 items-center">
          <DiscordIcon className="w-7 h-7" />
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
