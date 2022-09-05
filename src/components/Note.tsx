import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Container from "./shared/Container";
import Button from "./shared/Button";
import HomeIcon from "../assets/images/home-icon.png";
import NoteModal from "./NoteModal";

function Note() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [incorrectData, setIncorrectData] = useState<Array<any>>([]);
  const [selectData, setSelectData] = useState<object>({});
  const [date, setDate] = useState<string>("");

  const handleOpenModal = (data: object) => {
    setOpenModal(true);
    setSelectData(data);
  };

  const handleModal = (result: boolean) => {
    setOpenModal(result);
  };

  useEffect(() => {
    if (localStorage.getItem("note")) {
      const data: any = localStorage.getItem("note");
      const { quizData, timeStamp } = JSON.parse(data);

      const newDate = new Date(timeStamp).toLocaleDateString();
      const parseDate = newDate.replaceAll(". ", "-").replace(".", "");
      setDate(parseDate);

      quizData.forEach((item: any) => {
        if (item.correct_answer !== item.userAnswer) {
          setIncorrectData((data) => data.concat(item));
        }
      });
    }
  }, []);

  return (
    <>
      <NoteContainer>
        <Header>
          <div className="title">
            <p>오답노트</p>
            <Button onClick={() => navigate("/")}>
              <img src={HomeIcon} alt="home button" className="home" />
            </Button>
          </div>
          <div className="line" />
        </Header>
        {incorrectData.length !== 0
          ? <Content>
            {incorrectData.map((item: any) => (
              <Button onClick={() => handleOpenModal(item)}>
                <span>{date}</span>
                <h2 dangerouslySetInnerHTML={{ __html: `${item?.question}` }} />
              </Button>
            ))}
          </Content>
          : <p className="message">퀴즈를 풀면 틀린 문제 리스트를 볼 수 있습니다.</p>
        }
      </NoteContainer>
      {openModal && <NoteModal handleModal={handleModal} selectData={selectData} />}
    </>
  );
}

const NoteContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .message {
    margin: 50px;
    font-size: 30px;
    color: white;
  }
`;

const Header = styled.div`
  width: 100%;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 20px;
      margin-bottom: 8px;
      color: #757575;
      font-size: 20px;
      font-weight: bold;
    }

    button {
      position: relative;
      right: 30px;
      top: 10px;
      width: 50px;
      border-radius: 50%;

      img {
        width: 20px;
        filter: invert(99%) sepia(5%) saturate(128%)
          hue-rotate(256deg) brightness(114%) contrast(86%);
      }
    }
  }

  .line {
    width: 90%;
    height: 5px;
    margin-left: 20px;
    border-radius: 10px;
    background-color: #25252547;
  }
`;

const Content = styled.div`
  width: 98%;
  height: 85%;
  margin: 20px;
  background-color: #33333346;
  overflow: scroll;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 10px;

    span {
      width: 10%;
    }

    h2 {
      width: 90%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export default Note;
