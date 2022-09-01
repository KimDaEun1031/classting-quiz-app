import styled from "styled-components";

const Button = styled.button`
  width: 15rem;
  height: 50px;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #434343;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};

    &::before {
      left:-50%;
      transform: skewX(-5deg);
    }
  }

  &:disabled {
    cursor: text;

    &:hover {
      background-color: ${(props) => props.theme.colors.darkgray};
    }
  }
`;

export default Button;
