import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Main from "./components/Main";
import Note from "./components/Note";
import NotFound from "./components/NotFound";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/note" element={<Note />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Background>
  );
}

const Background = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #383E4E;
`;

export default App;
