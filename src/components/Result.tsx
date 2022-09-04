import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Container from "./shared/Container";
import Frame from "./shared/Frame";
import AnimationButton from "./shared/AnimationButton";
import HomeIcon from "../assets/images/home-icon.png";
import RedoIcon from "../assets/images/redo-icon.png";
import NoteIcon from "../assets/images/note-icon.png";

ChartJS.register(ArcElement, Tooltip, Legend);

function Result() {
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const { incorrect, correct, time } = state;

  const data = {
    labels: ["정답", "오답"],
    datasets: [
      {
        label: "# of Quiz",
        data: [correct, incorrect],
        backgroundColor: ["rgb(0, 168, 199)", "rgb(221, 89, 89)"],
        borderColor: ["rgb(0, 168, 199)", "rgb(221, 89, 89)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ResultContainer>
      <ResultFrame>
        <div>
          <h2>결과</h2>
          <span>{time}초</span>
        </div>
        <Chart>
          <Doughnut data={data} />
        </Chart>
      </ResultFrame>
      <ButtonContainer>
        <AnimationButton onClick={() => navigate("/")}>
          <img src={HomeIcon} alt="home button" />
          <span>홈</span>
        </AnimationButton>
        <AnimationButton onClick={() => navigate("/quiz")}>
          <img src={RedoIcon} alt="redo button" />
          <span>다시 하기</span>
        </AnimationButton>
        <AnimationButton onClick={() => navigate("/note")}>
          <img src={NoteIcon} alt="note button" />
          <span>오답 노트</span>
        </AnimationButton>
      </ButtonContainer>
    </ResultContainer>
  );
}

const ResultContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ResultFrame = styled(Frame)`
  width: 800px;
  height: 80%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span, h2 {
      margin: 10px;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

const Chart = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 9rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 35px;
`;

export default Result;
