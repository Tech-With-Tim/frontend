import styled from "styled-components";

export const ProfileHeader = styled.div`
  background-color: #f39200;
  text-transform: uppercase;
  color: white;
  text-align-last: right;
  padding-right: 10px;
  letter-spacing: 7px;
  max-width: 20vw;
  font-size: 1.5rem;
  border-radius: 5px;
  margin: 40px 0 40px -10px;
  font-weight: 650;

  @media screen and (max-width: 1000px) {
    margin: 40px auto;
    padding-right: 0;
    text-align-last: center;
    max-width: 40vw;
  }
`;

export const ProfileContainer = styled.div`
  background-color: #292e39;
  border-radius: 20px;
  width: 80vw;
  min-height: 55vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    max-width: 70vw;
  }
`;

export const ProfileInfoContainer = styled.div`
  background-color: #313a48;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  display: flex;

  img {
    margin: 0 10px;
    height: 75px;
    width: 75px;
  }

  @media screen and (max-width: 1000px) {
    .profile {
      grid-row: 2/3;
    }

    .badges {
      grid-row: 3/4;
    }
  }
`;

export const BigProfileInfoContainer = styled.div`
  background-color: #313a48;
  border-radius: 20px;
  padding: 15px;
  grid-row: 1/3;
  margin: 10px;

  @media screen and (max-width: 1000px) {
    grid-row: 2/3;
  }
`;

export const ProfileInfo = styled.div`
  h5 {
    font-size: 2rem;
    letter-spacing: 5px;
  }

  h1 {
    letter-spacing: 3px;
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 10px;
  }

  h4 {
    color: #e94e1b;
    letter-spacing: 2px;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .profile-name {
    margin: auto;
  }
`;

export const ChallengeHistoryCardStyle = styled.div`
  .failed {
    background-color: #d1563a;
  }

  .passed {
    background-color: #2fbe60;
  }

  h5 {
    color: white;
    letter-spacing: 2px;
    word-spacing: 20px;
    text-transform: uppercase;
    padding: 5px;
    font-size: 1rem;
  }

  .solution-card {
    max-width: 20vw;
    margin: 10px 0 10px 0;
    padding-left: 5px;
    border-radius: 5px;
  }

  .difficulty-meter {
    display: flex;
    margin-top: -35px;
    margin-left: 350px;

    @media screen and (max-width: 1000px) {
      margin-top: 0;
      margin-left: 0;
    }
  }

  .dot {
    background-color: #9b9b9b;
    border-radius: 99%;
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  .green {
    background-color: #5af457;
  }

  .yellow {
    background-color: #f4e457;
  }

  .red {
    background-color: #d1563a;
  }

  padding-bottom: 10px;
`;

export const UserPic = styled.div`
  border: 7px solid #424c60;
  height: 207px;
  width: 207px;
  border-radius: 99%;
  text-align: center;
  display: table-cell;
  vertical-align: middle;

  img {
    margin: 0;
    border-radius: 99%;
    width: 180px;
    height: 180px;
    vertical-align: middle;
  }
`;

export const BadgeOccurence = styled.div`
  position: absolute;
  border-radius: 99%;
  font-size: 1rem;
  text-align-last: center;
  background-color: white;
  color: black;
  width: 20px;
  height: 20px;
  margin-top: -30px;
  margin-left: 72px;
`;
