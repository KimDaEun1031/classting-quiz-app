import styled from "styled-components";

import Container from "./shared/Container";
import Button from "./shared/Button";
import AnimationButton from "./shared/AnimationButton";
import BackIcon from "../assets/images/back-icon.png";
import { answerProps } from "./type";

function NoteModal({ handleModal, selectData }: any) {
  return (
    <NoteModalContainer>
      <ModalContainer>
        <p
          className="question"
          dangerouslySetInnerHTML={{ __html: `Q: ${selectData?.question}` }}
        />
        <Content>
          <div className="answerList">
            {selectData.incorrect_answers.map((item: string) => (
              <AnswerButton
                isCorrect={selectData.correct_answer === item}
                selected={selectData.userAnswer === item}
                disabled
              >
                {item}
              </AnswerButton>
            ))}
          </div>
          <AnimationButton onClick={() => handleModal(false)}>
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
  }
`;

const AnswerButton = styled(Button)<answerProps>`
  margin: 10px;
  background-color: ${(props) => props.isCorrect && props.theme.colors.blue};
  background-color: ${(props) => props.selected && props.theme.colors.red};

  &:hover {
    background-color: ${(props) => props.isCorrect && props.theme.colors.blue};
    background-color: ${(props) => props.selected && props.theme.colors.red};
  }
`

export default NoteModal;
