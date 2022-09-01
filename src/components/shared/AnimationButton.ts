import styled, { keyframes } from "styled-components";
import Button from "./Button";

const Opacity = keyframes`
  from {}
  to {
    opacity:0;
  }
`;

const AnimationButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  span {
    position: relative;
    top: 6px;
    left: -10px;
    opacity: 1;
    transition: left 0.4s 0.1s;
  }

  img {
    position: relative;
    left: -10px;
    width: 30px;
    opacity: 0;
    transition: left 0.3s 0s, top 0.3s 0s, ${Opacity} 0.3s 0s;
    filter: invert(99%) sepia(5%) saturate(128%)
      hue-rotate(256deg) brightness(114%) contrast(86%);
  }

  &:hover {
    span {
      left: 5px;
      transition: left 0.4s;
    }

    img {
      left: 0px;
      opacity: 1;
      transition: left 0.3s 0s, top 0.3s 0.1s, ${Opacity} 0.5s 0.1s;
    }
  }
`;

export default AnimationButton;
