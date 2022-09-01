import styled from "styled-components";

import Container from "./shared/Container";
import AnimationButton from "./shared/AnimationButton";
import Logo from "../assets/images/classting-logo.png";
import QuizIcon from "../assets/images/quiz-icon.png";
import NoteIcon from "../assets/images/note-icon.png";
import BackIcon from "../assets/images/back-icon.png";

function Main() {
  return (
    <MainContainer>
      <img src={Logo} alt="logo" />
      <div className="startContainer">
        <img src={QuizIcon} alt="quiz icon" />
        <div>
          <AnimationButton>
            <img src={BackIcon} alt="start button" />
            <span>Start</span>
          </AnimationButton>
          <AnimationButton>
            <img src={NoteIcon} alt="note button" />
            <span>오답 노트</span>
          </AnimationButton>
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .startContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10rem;

    button {
      margin-top: 20px;
    }
  }
`;

export default Main;
