import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexSet } from "../../styles/variable";

const Input = ({
  type,
  desc,
  name,
  onChange,
  inputValue,
  value,
  autoPhoneNumber,
  pwValid,
}) => {
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
        break;
      case "inputPassword":
        if (inputValue?.length < 1) {
          setNotice("비밀번호를 입력해주세요");
        } else if (inputValue?.length < 7) {
          setNotice("비밀번호는 6자리 이상이어야 합니다");
        } else {
          setNotice("");
        }
        break;
      case "Checkpassword":
        console.lo(pwValid);
        if (pwValid) {
          setNotice("비밀번호가 일치하지 않습니다");
        } else {
          setNotice("");
        }
        break;
      case "code":
        if (inputValue?.length < 2) {
          setNotice("인증번호를 입력해주세요");
        } else if (inputValue?.length !== 6) {
          setNotice("인증번호는 6글자 입니다");
        }
        break;
      case "userName":
        if (inputValue?.length < 2) {
          setNotice("이름을 입력해주세요");
        } else {
          setNotice("");
        }
        break;
      // case "userPhone":
      //   if (inputValue?.length < 1) {
      //     setNotice("인증번호를 입력해주세요");
      //   } else if (inputValue?.length !== 6) {
      //     setNotice("인증번호는 6글자 입니다");
      //   }
      //   break;
      default:
        setNotice("");
        break;
    }
  };

  useEffect(() => {
    if (inputValue) {
      isValid();
    }
  }, [inputValue]);

  return (
    <InputWrap>
      <input
        type={type}
        value={value}
        placeholder={desc}
        name={name}
        onChange={(e) => {
          if (name == e.target.name) {
            onChange(e.target);
          }
        }}
        onInput={(e) => {
          if (name == "userPhone") autoPhoneNumber(e);
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
