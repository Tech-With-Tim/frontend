import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Nav,
  NavBrand,
  NavDropdown,
  NavDropItems,
  NavItem,
  NavItems,
  UserImage,
  UserImageContainer,
} from "./Styles";

import Drop from "./Drop.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [eventsOpen, setEventsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <div>
        <Link to="/">
          <NavBrand
            src="https://cdn.discordapp.com/avatars/501089409379205161/b8120683fca41a13895f9d6c5a31d01a.png?size=2048"
            alt="brand"
          />
        </Link>
        <NavItems>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavDropdown
            isOpen={eventsOpen}
            onClick={() => setEventsOpen(!eventsOpen)}
          >
            <span>Events</span>
            <img src={Drop} alt="" />
            <NavDropItems>
              <p>Timathon</p>
              <p>Challenges</p>
            </NavDropItems>
          </NavDropdown>
          <NavItem>
            <Link to="/community">Community</Link>
          </NavItem>
        </NavItems>
      </div>
      <Link to="/profile">
        <UserImageContainer>
          <UserImage
            src="https://cdn.discordapp.com/avatars/601173582516584602/169beee4924c94b6e30a5c5139d66dac.png?size=2048"
            alt="pfp"
          />
        </UserImageContainer>
      </Link>
    </Nav>
  );
};

export default connect()(Navbar);
