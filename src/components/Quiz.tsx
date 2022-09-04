import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "./shared/Button";
import Container from "./shared/Container";
import Frame from "./shared/Frame";
import getQuizAPI from '../api/index';
import scrubData from "../utils/scrubData";
import { answerProps } from './type';

function Quiz() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<number>(0);
  const [quizData, setQuizData] = useState<any | null>([]);
  const [selected, setSelected] = useState<boolean>(false);
  const [selectIdx, setSelectIdx] = useState<number>();
  const [correctNumber, setCorrectNumber] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const handleQuizData = async () => {
    const res = await getQuizAPI();
    const data = scrubData(res.data.results);

    setQuizData(data);
  };

  const handleClickAnswer = (answer: string, idx: number) => {
    const correctAnswer = quizData[stage].correct_answer;
    Object.assign(quizData[stage], { userAnswer: answer });

    if (answer === correctAnswer) {
      setCorrectNumber((props) => props + 1);
      setIsCorrect(true);
    }

    setSelectIdx(idx);
    setSelected(true);
  };

  const handleClickNext = () => {
    setStage(stage + 1);
    setSelected(false);
    setSelectIdx(4);
    setIsCorrect(false);
  };

  const handleResult = () => {
    navigate("/result", {
      state: {
        quizData,
        correctNumber,
        time,
      },
    });

    setStage(0);
    setSelected(false);
    setSelectIdx(4);
    setIsCorrect(false);
    setCorrectNumber(0)
    setTime(0)
  };

  useEffect(() => {
    handleQuizData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((props) => props + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <Container>
      {quizData.length !== stage &&
        <>
          <Header>
            <h2 className="questionNumber">
              {`Question ${stage + 1}`}
            </h2>
            <p>{time}</p>
            <div className="correctAnswer">
              <p>✔ {correctNumber}</p>
              <p>✘ {quizData.length - correctNumber}</p>
            </div>
          </Header>
          <Frame>
            <Question>
              <span>🔔</span>
              <span className="question">
                {quizData[stage]?.question}
              </span>
            </Question>
            <AnswerList>
              {quizData[stage].incorrect_answers?.map((item: string, idx: number) => (
                <AnswerButton
                  key={idx}
                  onClick={() => handleClickAnswer(item, idx)}
                  selected={selectIdx === idx}
                  disabled={selected}
                  isCorrect={isCorrect}
                >
                  {item}
                </AnswerButton>
              ))}
            </AnswerList>
          </Frame>
          <Footer>
            <Button
              onClick={() => quizData.length - 1 !== stage
                ? handleClickNext()
                : handleResult()
              }
              disabled={!selected}
            >
              {quizData.length - 1 !== stage ?  "Next Question" : "Finish"}
            </Button>
          </Footer>
        </>
      }
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  text-align: center;

  p, h2 {
    width: 130px;
    margin: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &.questionNumber {
      font-size: 24px;
    }
  }

  .correctAnswer p {
    text-align: right;

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
`;

const AnswerButton = styled(Button)<answerProps>`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => (props.isCorrect && props.selected)
    && props.theme.colors.blue};
  background-color: ${(props) => (!props.isCorrect && props.selected)
    && props.theme.colors.red};

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

  &:hover {
    background-color: ${(props) => props.theme.colors.darkgray};
    background-color: ${(props) => (!props.isCorrect && props.selected)
    && props.theme.colors.red};
    background-color: ${(props) => (props.isCorrect && props.selected)
    && props.theme.colors.blue};
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: linear-gradient(to left, #00A8C7, #00c795);

    &:hover {
      transform: translate(40px);
    }

    &:disabled {
      background: ${(props) => props.theme.colors.darkgray};

      &:hover {
        transform: translate(0);
      }
    }
  }
`;

export default Quiz;
