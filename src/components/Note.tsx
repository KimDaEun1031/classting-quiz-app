import styled from 'styled-components';

import Container from "./shared/Container";
import Button from './shared/Button';
import HomeIcon from "../assets/images/home-icon.png";
import NoteModal from './NoteModal';

function Note() {
  return (
    <>
      <NoteContainer>
        <Header>
          <div className="title">
            <p>오답노트</p>
            <Button>
              <img src={HomeIcon} alt="home button" className="home" />
            </Button>
          </div>
          <div className="line" />
        </Header>
        <Content>
          <Button>
            <span>2022-09-01</span>
            <h2>Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?</h2>
          </Button>
        </Content>
      </NoteContainer>
      <NoteModal />
    </>
  );
}

const NoteContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
