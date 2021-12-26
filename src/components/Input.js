import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexSet } from "../styles/variable";
import { useDispatch, useSelector } from "react-redux";

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
  const userInfos = useSelector((state) => state.userInfos);

  console.log(inputValue, name);

  const isValid = () => {
    switch (name) {
      case "email":
        console.log("email", userInfos.email);
        const check = String(userInfos.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if (userInfos.email?.length < 1) {
          setNotice("이메일을 입력해주세요");
          if (check == null) {
            setNotice("올바른 이메일 형식이 아닙니다");
            break;
          } else {
            setNotice("");
            break;
          }
        }
        break;
      case "inputPassword":
        console.log("inputPassword", userInfos.pw);
        if (!userInfos.pw?.length < 1) {
          setNotice("비밀번호를 입력해주세요");
          break;
        } else if (userInfos.pw?.length < 7) {
          setNotice("비밀번호는 6자리 이상이어야 합니다");
          break;
        } else {
          setNotice("");
          break;
        }
        break;
      case "Checkpassword":
        console.lo(pwValid);
        if (userInfos.pw !== inputValue) {
          setNotice("비밀번호가 일치하지 않습니다");
          break;
        } else {
          setNotice("");
          break;
        }
        break;
      case "code":
        if (inputValue?.length < 1) {
          setNotice("인증번호를 입력해주세요");
          break;
        } else if (inputValue?.length !== 6) {
          setNotice("인증번호는 6글자 입니다");
          break;
        }
        break;
      case "userName":
        if (userInfos.name?.length < 1) {
          setNotice("이름을 입력해주세요");
          break;
        } else {
          setNotice("");
          break;
        }
        break;
      case "userPhone":
        if (userInfos.phoneNumber?.length < 1) {
          setNotice("인증번호를 입력해주세요");
          break;
        } else if (inputValue?.length !== 6) {
          setNotice("인증번호는 6글자 입니다");
          break;
        }
        break;
      default:
        setNotice("");
        break;
    }
  };

  useEffect(() => {
    isValid();
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
