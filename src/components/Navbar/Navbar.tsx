import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Nav,
  NavBrand,
  NavDropdown,
  NavItem,
  NavItems,
  UserImage,
  UserImageContainer
} from "./Styles";

import openDrop from "./openDrop.svg";
import closeDrop from "./closeDrop.svg";

import { Link } from "react-router-dom";

import { history } from "../../helpers";

const Navbar = () => {
  const [eventsOpen, setEventsOpen] = useState<boolean>(false);

  console.log(history);

  return <Nav>
    <div>
      <Link to="/"><NavBrand src="https://cdn.discordapp.com/avatars/501089409379205161/b8120683fca41a13895f9d6c5a31d01a.png?size=2048" alt="brand" /></Link>
      <NavItems>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavDropdown
          isOpen={eventsOpen}
          onClick={() => setEventsOpen(!eventsOpen)}>
          <span>Events</span>
          <img src={eventsOpen ? closeDrop : openDrop} alt="" />
        </NavDropdown>
        <NavItem><Link to="/community">Community</Link></NavItem>
      </NavItems>
    </div>
    <Link to="/profile">
      <UserImageContainer>
        <UserImage src="https://cdn.discordapp.com/avatars/601173582516584602/1f381d95751488e11d5cb56477cfdf4e.png?size=2048" />
      </UserImageContainer>
    </Link>
  </Nav>
}

export default connect()(Navbar);
