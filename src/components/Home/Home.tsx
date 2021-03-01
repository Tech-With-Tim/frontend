import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions";
import {
  HomeContainer,
  InfoContainer,
  ItemContainer,
  HomeImage,
  InfoButtons,
  InfoButton,
} from "./Styles";

import { InfoCard } from "../InfoCard/InfoCard";
import { InfoCardsContainer } from "../InfoCard/Styles";

import home1 from "./home1.svg";
import home1s from "./home1small.svg";

import challenges from "./challenges.svg";
import challengesSmall from "./challengesSmall.svg";

import discord from "./discord.svg";
import youtube from "./youtube.svg";
import {Link} from "react-router-dom";

function Home() {
  return (
    <HomeContainer>
      <ItemContainer>
        <InfoContainer>
          <h5>Welcome to</h5>
          <h1>Tech With Tim</h1>
          <h4>Programming &amp; Tech Community</h4>
          <InfoButtons>
            <InfoButton
              target="_blank"
              href="https://discord.gg/twt"
              title="Join our discord server"
            >
              <img src={discord} /> <span>Join our server</span>
            </InfoButton>
            <InfoButton
              target="_blank"
              href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg"
              title="Subscribe to youtube channel"
            >
              <img src={youtube} /> <span>Subscribe</span>
            </InfoButton>
          </InfoButtons>
        </InfoContainer>
        <HomeImage>
          <source srcSet={home1s} media="(max-width:1015px)" sizes="500" />
          <img src={home1} alt="" />
        </HomeImage>
      </ItemContainer>
      <ItemContainer>
        <InfoContainer>
          <h5>TIMATHON</h5>
          <h1>Code Jam</h1>
          <p className="details">
            Hosted every 2 months, consisting of a different theme and allowing
            yourself to put your skills to the test.
          </p>
          <Link to="/timathon" className="button-main m-t-10">Read more</Link>
        </InfoContainer>
        <InfoCardsContainer className="center-div-md-m">
          <InfoCard className="center-text">
            <h1>07</h1>
            <h4>Code Jams</h4>
          </InfoCard>
          <InfoCard className="center-text">
            <h1>617</h1>
            <h4>Teams</h4>
          </InfoCard>
          <InfoCard className="center-text">
            <h1>212</h1>
            <h4>Submissions</h4>
          </InfoCard>
        </InfoCardsContainer>
      </ItemContainer>
      <ItemContainer className="flex-row-reverse">
        <InfoContainer className="flex-align-f-end">
          <h5>Weekly</h5>
          <h1>Challenges</h1>
          <p className="details">Submit your solutions and earn badges!</p>
          <Link to="/challenges" className="button-main m-t-10">Read more</Link>
        </InfoContainer>
        <HomeImage>
          <source
            srcSet={challengesSmall}
            media="(max-width:1015px)"
            sizes="500"
          />
          <img src={challenges} alt="" />
        </HomeImage>
      </ItemContainer>
    </HomeContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: {
      token: state.authReducer.token,
    },
  };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
