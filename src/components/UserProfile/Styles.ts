import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: grey;
  border-radius: 20px;
  padding: 15px;
  margin: 20px;
`;

export const ProfileInfoContainer = styled.div`
  background-color: black;
  border-radius: 20px;
  padding: 15px;
  max-width: 40vw;
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
    background-color: red;
  }

  .passed {
    background-color: green;
  }

    h5 {
      color: white;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    div {
      min-width: 100px;
      max-width: 40vw;
      margin: 10px;
      padding-left: 5px;
      border-radius: 7px;
      background-color: white;
      color: white;
      
    }
  }
`;
