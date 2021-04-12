import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 5px solid rgb(0, 0, 0, 0);
  border-top: 5px solid rgb(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;

  animation: ${spin} 500ms linear infinite;
`;
