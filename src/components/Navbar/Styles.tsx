import styled, { keyframes } from "styled-components";

export const NavBrand = styled.img`
  width: 80px;
  height: 80px;
`;

export const NavAnimate = keyframes`
  from{
    width: 0;
    right: 0;
  }

  to{
    width: 100%;
    right: 100%;
  }
`;

export const NavItem = styled.li`
  margin-left: 3rem;
  font-size: 1.45rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color: #fa9722;
    height: 2px;
  }

  :hover::after {
    animation: ${NavAnimate} 0.2s linear forwards;
  }
`;

export const NavDropdown = styled.div<any>`
  margin-left: 3rem;
  font-size: 1.45rem;
  color: white;
  font-weight: 600;
  align-items: center;
  display: inline-flex;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  padding: 0 0 0 15px;

  position: relative;

  img {
    margin-left: 15px;
    transform: rotateZ(${(props) => (props.isOpen ? "-180deg" : "0")});
    transition: transform 0.25s linear;
  }

  span {
    width: fit-content;
    position: relative;

    ::after {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: -2px;
      left: 0;
      background-color: #fa9722;
      height: 2px;

      animation: ${(props) => props.isOpen && NavAnimate} 0.2s linear forwards;
    }
  }

  @media screen and (max-width: 810px) {
    margin: 0 auto;
    padding: 0;
    text-align: center;

    img {
      display: none;
    }

    span::after {
      background-color: transparent;
    }
  }

  :hover {
    span::after {
      animation: ${NavAnimate} 0.2s linear forwards;
    }
  }

  > div {
    display: ${(props) => !props.isOpen && "none"};
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 25px;

  @media screen and (max-width: 810px) {
    flex-direction: column;
    background-color: #12131c;

    margin-left: 0;

    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;

    transition: left 0.5s linear;

    min-width: 250px;
    width: fit-content;

    > * {
      margin-left: auto;
      margin-right: auto;
      margin-top: 3rem;
      width: 100%;
      text-align: center;
    }

    li::after {
      background-color: transparent;
      animation: none;
    }
  }
`;

export const ExpandHeightAnimation = keyframes`
  from{
    max-height: 0;
  }

  to{
    max-height: 500px;
  }
`;

export const NavDropItems = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  text-align: center;
  background-color: #313440;

  border-top: 2px solid #fa9722;

  padding: 7px 15px;

  transform: translateX(-50%);
  overflow-y: hidden;

  cursor: initial;

  animation: ${ExpandHeightAnimation} 1.5s linear forwards;

  > * {
    cursor: pointer;

    p {
      border-top: 2px solid #393c49;
    }

    &:first-child {
      p {
        border: none;
      }
    }
  }

  @media screen and (max-width: 810px) {
    margin: 0;
    margin-top: 5px;
    width: 100%;
    /* border-top: none; */

    position: initial;

    transform: translate(0);

    * {
      padding-top: 7px;
    }
  }

  *:hover {
    color: #fa9722;
  }
`;

export const UserImageContainer = styled.div`
  background: linear-gradient(#ff512f, #dd2476);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 38px;
  cursor: pointer;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

export const Close = styled.img`
  width: 35px;
  position: relative;
  top: 0;
  left: -75px;

  cursor: pointer;

  @media screen and (min-width: 810px) {
    display: none;
  }
`;

export const Nav = styled.div`
  margin: 35px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 810px) {
    .user {
      position: fixed;
      bottom: 25px;
      left: -100%;

      margin-left: 25px;

      transition: left 0.5s linear;

      width: 200px;

      align-items: center;

      display: flex;
      flex-direction: row;

      h2 {
        margin-left: 15px;
      }
    }
  }

  .open-btn {
    cursor: pointer;
    position: absolute;
    right: 50px;
  }

  .open {
    left: 0;
  }

  @media screen and (min-width: 810px) {
    .user {
      h2 {
        display: none;
      }
    }

    .open-btn {
      display: none;
    }
  }
`;
