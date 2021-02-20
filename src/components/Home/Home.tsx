import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions";
import { 
  HomeContainer, 
  InfoContainer,
  ItemContainer,
  HomeImageContainer,
  HomeImage,
  InfoButtons,
  InfoButton
} from "./Styles";

import home1 from "./home1.svg";
import discord from "./discord.svg";
import youtube from "./youtube.svg";

function Home() {
  return (
    <HomeContainer>
      <ItemContainer>
        <HomeImageContainer>
          <HomeImage src={home1} alt="" />
        </HomeImageContainer>
        <InfoContainer>
          <h5>Welcome to</h5>
          <h1>Tech With Tim</h1>
          <h4>Programming &amp; Tech Community</h4>
          <InfoButtons>
            <InfoButton href="https://discord.gg/twt" title="Join our discord server">
              <img src={discord} /> <span>Join our server</span>
            </InfoButton>
            <InfoButton href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg" title="Subscribe to youtube channel">
              <img src={youtube} /> <span>Subscribe</span>
            </InfoButton>
          </InfoButtons>
        </InfoContainer>
      </ItemContainer>
    </HomeContainer>
  );
}

const mapStateToProps = state => {
  return {
    auth: {
      token: state.authReducer.token,
    }
  }
}

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
