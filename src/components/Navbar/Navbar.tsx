import React, { useState } from "react";

import {
  Nav,
  Close,
  NavBrand,
  NavDropdown,
  NavDropItems,
  NavItem,
  NavItems,
  UserImage,
  UserImageContainer,
} from "./Styles";

import cb from "classnames";

import Drop from "./Drop.svg";
import close from "./close.svg";
import navOpen from "./nav.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [eventsOpen, setEventsOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <div>
        <Link to="/">
          <NavBrand
            src="https://cdn.discordapp.com/avatars/501089409379205161/b8120683fca41a13895f9d6c5a31d01a.png?size=2048"
            alt="brand"
          />
        </Link>
        <NavItems className={cb({ open: isOpen })}>
          <Close onClick={() => setIsOpen(false)} src={close} alt="" />
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavDropdown
            isOpen={eventsOpen}
            onClick={() => setEventsOpen(!eventsOpen)}
          >
            <div>
              <span>Events</span>
              <img src={Drop} alt="" />
            </div>
            <NavDropItems>
              <Link to="/timathon">
                <p>Timathon</p>
              </Link>
              <Link to="/challenges">
                <p>Challenges</p>
              </Link>
            </NavDropItems>
          </NavDropdown>
          <NavItem>
            <Link to="/community">Community</Link>
          </NavItem>
          <NavItem>
            <Link to="/bot">Bot</Link>
          </NavItem>
        </NavItems>
      </div>
      <img
        className="open-btn"
        onClick={() => setIsOpen(true)}
        src={navOpen}
        alt=""
      />
      <div>
        <Link to="/profile" className={cb({ open: isOpen, user: true })}>
          <UserImageContainer>
            <UserImage
              src="https://cdn.discordapp.com/avatars/601173582516584602/169beee4924c94b6e30a5c5139d66dac.png?size=2048"
              alt="pfp"
            />
          </UserImageContainer>
          <h2>Account</h2>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
