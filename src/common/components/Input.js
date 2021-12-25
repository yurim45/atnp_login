import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexSet } from "../../styles/variable";

const Input = ({ type, desc, name, onChange, inputValue }) => {
  const [notice, setNotice] = useState("");

  const isValid = () => {
    switch (name) {
      case "email":
        const check = String(inputValue)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if (!inputValue) {
          setNotice("이메일을 입력해주세요");
        } else {
          setNotice("");
        }
        if (check == null) {
          setNotice("올바른 이메일 형식이 아닙니다");
        } else {
          setNotice("");
        }
      case "password":
        if (inputValue?.length < 1) {
          setNotice("비밀번호를 입력해주세요");
          break;
        }
        return;
      case "code":
        if (inputValue?.length < 1) {
          setNotice("인증번호를 입력해주세요");
          break;
        } else if (inputValue?.length !== 6) {
          setNotice("인증번호는 6글자 입니다");
          break;
        }
      default:
        break;
    }
  };

  useEffect(() => {
    if (inputValue) {
      isValid();
    }
    console.log(inputValue);
  }, [inputValue]);

  return (
    <InputWrap>
      <input
        type={type}
        placeholder={desc}
        name={name}
        onChange={(e) => {
          onChange(e.target);
        }}
      />
      <p className='notice'>{notice}</p>
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div`
  ${flexSet("center", "center")};
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

  .notice {
    position: absolute;
    right: 0;
    padding: 10px;
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.9rem;
  }
`;
