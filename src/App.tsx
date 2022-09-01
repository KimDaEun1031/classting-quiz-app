import styled from "styled-components";

import Main from "./components/Main";

function App() {
  return (
    <Background>
      <Main />
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
