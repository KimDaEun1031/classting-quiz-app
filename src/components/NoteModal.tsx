import styled from "styled-components";

import Container from "./shared/Container";
import Button from "./shared/Button";
import AnimationButton from "./shared/AnimationButton";
import BackIcon from "../assets/images/back-icon.png";

function NoteModal() {
  const exampleAnswerList = ["Pirates of the Caribbean", "Ted", "Spy Kids", "Harry Potter"];

  return (
    <NoteModalContainer>
      <ModalContainer>
        <p className="question">
          Q1. Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?
        </p>
        <Content>
          <div className="answerList">
            {exampleAnswerList.map((item) => (
              <Button disabled>{item}</Button>
            ))}
          </div>
          <AnimationButton>
            <img src={BackIcon} alt="back button" />
            <span>뒤로가기</span>
          </AnimationButton>
        </Content>
      </ModalContainer>
    </NoteModalContainer>
  );
}

const NoteModalContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -50px;
  width: 100vw;
  height: 100%;
  border-radius: 0;
  background-color: transparent;
`;

const ModalContainer = styled(Container)`
  width: 60%;
  min-width: 60%;
  height: 400px;
  margin-top: 150px;
  border: 5px solid ${(props) => props.theme.colors.green};

  .question {
    margin: 20px 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .answerList {
    display: flex;
    flex-direction: column;

    button {
      margin: 10px;

      &:first-child {
        background-color: ${(props) => props.theme.colors.green};
      }

      &:nth-child(3) {
        background-color: ${(props) => props.theme.colors.red};
      }
    }
  }
`;

export default NoteModal;
