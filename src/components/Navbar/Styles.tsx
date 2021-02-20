import styled, { keyframes } from "styled-components";

export const Nav = styled.div`
  margin: 35px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child{
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

  ::after{
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color: #FA9722;
    height: 1.5px;
  }

  :hover::after{
    animation: ${NavAnimate} 0.2s linear forwards;
  }
`;

// nothing i just added two svg/s that should go depending on the dropdown opened or closed
// but it's on the navbar.tsx at the bottom
// sry i was dealing with a guy in TWT... :mhm:
// what did you want me to do? :mhm  

export const NavDropdown = styled.div<any>`
  margin-left: 3rem;
  font-size: 1.45rem;
  color: white;
  font-weight: 600;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  
  > img {
    margin-left: 15px;
  }

  span{
    width: fit-content;
    position: relative;

    ::after{
      content: "";
      display: inline-block;
      position: absolute;
      bottom: -2px;
      left: 0;
      background-color: #FA9722;
      height: 1.5px;
    }
  }

  :hover{
    > span::after{
      animation: ${NavAnimate} 0.2s linear forwards;
    }
  }
`;

export const UserImageContainer = styled.div`
  background: linear-gradient(#FF512F, #DD2476);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 3px;
  cursor: pointer;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;
