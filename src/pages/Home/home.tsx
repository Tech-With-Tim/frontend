import React from "react";
import {
  HomeContainer,
  InfoContainer,
  ItemContainer,
  HomeImage,
  InfoButtons,
  InfoButton,
  InfoCardsContainer,
  InfoCardContainer,
} from "./Styles";

import home1 from "../../images/home1.svg";
import home1s from "../../images/home1small.svg";

import challenges from "../../images/home.challenges.svg";
import challengesSmall from "../../images/home.challengesSmall.svg";

import { Link } from "react-router-dom";
import { DiscordIcon, YoutubeIcon } from "../../icons";

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
              <DiscordIcon fill="#FA9722" width={50} height={50} />
              <span>Join our server</span>
            </InfoButton>
            <InfoButton
              target="_blank"
              href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg"
              title="Subscribe to youtube channel"
            >
              <YoutubeIcon fill="#FA9722" width={55} height={53} />
              <span>Subscribe</span>
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
          <Link to="/timathon" className="button-main m-t-10">
            Read more
          </Link>
        </InfoContainer>
        <InfoCardsContainer className="center-div-md-m">
          <InfoCardContainer className="center-text">
            <h1>07</h1>
            <h4>Code Jams</h4>
          </InfoCardContainer>
          <InfoCardContainer className="center-text">
            <h1>617</h1>
            <h4>Teams</h4>
          </InfoCardContainer>
          <InfoCardContainer className="center-text">
            <h1>212</h1>
            <h4>Submissions</h4>
          </InfoCardContainer>
        </InfoCardsContainer>
      </ItemContainer>
      <ItemContainer className="flex-row-reverse">
        <InfoContainer className="flex-align-f-end">
          <h5>Weekly</h5>
          <h1>Challenges</h1>
          <p className="details">Submit your solutions and earn badges!</p>
          <Link to="/challenges" className="button-main m-t-10">
            Read more
          </Link>
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

export default Home;
