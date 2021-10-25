import React, { useEffect, useState } from "react";

import {
  Nav,
  Close,
  NavDropdown,
  NavDropItems,
  NavItem,
  NavItems,
  NavLogo,
  UserImage,
  UserImageContainer,
} from "./Styles";
import Image from "next/image";

import cb from "classnames";

import Link from "next/link";
import { NavbarIcon } from "../../icons";
import { useAuthStore } from "../../stores/useAuthStore";
import { getAvatarURI } from "../../helpers";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState<boolean>(false);

  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <Nav>
      <div>
        <Link href="/">
          <a href="/">
            <NavLogo
              src="https://cdn.discordapp.com/avatars/501089409379205161/b8120683fca41a13895f9d6c5a31d01a.png?size=2048"
              alt="brand"
            />
          </a>
        </Link>
        <NavItems className={cb({ open: isOpen })}>
          <Close onClick={() => setIsOpen(false)}>
            <Image src="/images/navbar/close.svg" width={27} height={27} alt="" />
          </Close>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavDropdown isOpen={eventsOpen} onClick={() => setEventsOpen(!eventsOpen)}>
            <div>
              <span>Events</span>

              <Image
                src={"/images/navbar/Drop.svg"}
                width={21}
                height={10}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <NavDropItems>
              <Link href="/timathon">
                <p>Timathon</p>
              </Link>
              <Link href="/challenges">
                <p>Challenges</p>
              </Link>
            </NavDropItems>
          </NavDropdown>
          <NavItem>
            <Link href="/community">Community</Link>
          </NavItem>
          <NavItem>
            <Link href="/bot">Bot</Link>
          </NavItem>
        </NavItems>
      </div>
      <span className="cursor-pointer open-btn" onClick={() => setIsOpen(true)}>
        <NavbarIcon fill="white" />
      </span>
      <div>
        <div className={cb({ open: isOpen, user: true })}>
          {user ? (
            <Link href="/profile">
              <UserImageContainer>
                <UserImage
                  src={getAvatarURI(user.id, user.avatar, {
                    size: 64,
                    animated: true,
                  })}
                  alt="pfp"
                  className="max-w-none"
                />
              </UserImageContainer>
              <h2>Account</h2>
            </Link>
          ) : (
            <Link href="/login">Sign In</Link>
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
