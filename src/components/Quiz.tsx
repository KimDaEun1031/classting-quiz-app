import styled from "styled-components";

import Button from "./shared/Button";
import Container from "./shared/Container";
import Frame from "./shared/Frame";

function Quiz() {
  const exampleAnswerList = ["Pirates of the Caribbean", "Ted", "Spy Kids", "Harry Potter"];

  return (
    <Container>
      <Header>
        <h2 className="questionNumber">
          Question 1
        </h2>
        <div className="correctAnswer">
          <p>✔ 0</p>
          <p>✘ 0</p>
        </div>
      </Header>
      <Frame>
        <Question>
          <span>🔔</span>
          <span className="question">
            Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?
          </span>
        </Question>
        <AnswerList>
          {exampleAnswerList.map((item) => (
            <Button>{item}</Button>
          ))}
        </AnswerList>
      </Frame>
      <Footer>
        <Button>Next Question</Button>
      </Footer>
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  p, h2 {
    margin: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &.questionNumber {
      font-size: 24px;
    }
  }

  .correctAnswer p {
    &:first-child {
      color: ${(props) => props.theme.colors.green};
    }

    &:last-child {
      color: ${(props) => props.theme.colors.red};
    }
  }
`;

const Question = styled.div`
  margin: 20px;

  span {
    margin: 10px 0;
    color: white;
    font-size: 20px;

    &.question {
      padding-left: 5px;
      font-style: italic;
    }
  }
`;

const AnswerList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 15rem 0 30px 0;

  button {
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position:absolute;
      top:0;
      left:-100%;
      width:100%;
      height:100%;
      background: rgba(255, 255, 255, 0.1);
      transition:0.5s;
      pointer-events: none;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: linear-gradient(to left, #00A8C7, #00c795);

    &:hover {
      transform: translate(40px);
    }
  }
`;

export default Quiz;
