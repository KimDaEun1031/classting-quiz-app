import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-width: 80rem;
  max-width: 100rem;
  height: 700px;
  margin: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.main};
`;

export default Container;
