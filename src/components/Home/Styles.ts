import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 75px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 75px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const HomeImage = styled.picture`
  max-width: 450px;
  height: auto;
  width: 100%;

  margin: 0 auto;
  margin-top: 15px;

  text-align: center;

  img {
    margin: 0 auto;
    max-height: 350px;
    max-width: 100%;
    min-width: 250px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  

  min-width: 50%;
  word-wrap: none;

  h5 {
    font-size: 1.25rem;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  h1 {
    color: #f39200;
    letter-spacing: 3px;
    font-size: 2.75rem;
    text-transform: uppercase;
  }

  h4 {
    color: #e94e1b;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .details {
    color: #bbbbbb;
    font-weight: 600;

    max-width: 75%;

    word-wrap: break-word;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
    align-items: center;
    max-width: 400px;

    margin: 0 auto;
    margin-bottom: 25px;

    .details {
      max-width: 100%;
    }
  }
`;

export const InfoButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-left: -15px;

  @media screen and (max-width: 1000px) {
    width: fit-content;
    margin: 0 auto;
    margin-top: 25px;
  }
`;

export const InfoButton = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;

  cursor: pointer;

  min-width: fit-content;
  outline: none;

  img {
    padding: 0;
    margin: 0;
    width: 50px;
  }

  span {
    color: white;
    letter-spacing: 1px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 5px;
  }

  @media screen and (max-width: 470px) {
    span {
      display: none;
    }
  }
`;
