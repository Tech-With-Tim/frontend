import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  margin: 35px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    display: flex;
    align-items: center;
  }
`;

export const NavBrand = styled.img`
  width: 80px;
  height: 80px;
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 25px;
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

  padding: 0 15px;

  position: relative;

  > img {
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

  :hover {
    > span::after {
      animation: ${NavAnimate} 0.2s linear forwards;
    }
  }

  > div {
    display: ${(props) => !props.isOpen && "none"};
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

  min-width: 100%;

  padding: 3px 15px;

  transform: translateX(-50%);
  overflow-y: hidden;

  cursor: initial;

  animation: ${ExpandHeightAnimation} 1.5s linear forwards;

  * {
    cursor: pointer;

    border-top: 2px solid #393c49;

    :first-child {
      border: none;
    }
  }

  *:hover {
    color: #fa9722;
  }
`;

export const UserImageContainer = styled.div`
  background: linear-gradient(#ff512f, #dd2476);
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  /* padding: 3px; */
  cursor: pointer;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;
