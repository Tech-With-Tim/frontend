import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #292e39;
  border-radius: 20px;
  max-width: 70vw;
  min-height: 55vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const ProfileInfoContainer = styled.div`
  background-color: #313a48;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
`;

export const BigProfileInfoContainer = styled.div`
  background-color: #313a48;
  border-radius: 20px;
  padding: 15px;
  grid-row: 1/3;
  margin: 10px;

  @media screen and (max-width: 1000px) {
    grid-row: 3/4;
  }
`;

export const ProfileInfo = styled.div`
  h5 {
    font-size: 1.25rem;
    letter-spacing: 5px;
    text-transform: uppercase;
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
    text-transform: uppercase;
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
  }

  .solution-card {
    max-width: 20vw;
    margin: 10px 0 10px 0;
    padding-left: 5px;
    border-radius: 7px;
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
`;

export const UserPic = styled.div`
  border-radius: 99%;
`;
