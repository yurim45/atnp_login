import React from "react";
import styled from "styled-components";

const Input = ({ type, dec, name }) => {
  return (
    <InputWrap>
      <input type={type} placeholder={dec} name={name} />
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div`
  position: relative;
  margin: 16px 0px;
  width: 100%;

  input {
    border-radius: 5px;
    height: 54px;
    width: 100%;
    font-size: 0.9rem;
    padding: 12px;
    border: 1px solid rgb(221, 221, 221);

    :focus {
      border: 2px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;
