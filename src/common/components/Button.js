import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <ButtonWrap>
      <button></button>
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.div`
  position: relative;
  margin: 16px 0px;
  width: 100%;

  button {
  }
`;
