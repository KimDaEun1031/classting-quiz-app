import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import AnimationButton from "./shared/AnimationButton";
import Container from "./shared/Container";
import HomeIcon from "../assets/images/home-icon.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <p className="status">404</p>
      <p className="message">잘못된 경로로 이동하셨습니다.</p>
      <AnimationButton onClick={() => navigate("/")}>
        <img src={HomeIcon} alt="home button" />
        <span>홈</span>
      </AnimationButton>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 20px 0;
    font-size: 15rem;
    color: white;

    &.message {
      font-size: 30px;
      font-weight: bold;
    }
  }
`;

export default NotFound;
