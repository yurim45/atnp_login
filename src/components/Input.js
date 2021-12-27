import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexSet } from '../styles/variable';
import { useSelector } from 'react-redux';

const Input = ({
  type,
  desc,
  name,
  onChange,
  inputValue,
  value,
  autoPhoneNumber,
}) => {
  const [notice, setNotice] = useState('');
  const userInfos = useSelector((state) => state.userInfos);

  const emailCheck = (value) => {
    const result = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (inputValue !== undefined) {
      if (value?.length < 1) {
        setNotice('이메일을 입력해주세요');
      } else if (value?.length > 1 && result == null) {
        setNotice('올바른 이메일 형식이 아닙니다');
      } else {
        setNotice('');
      }
    } else {
      setNotice('');
    }
  };

  const pwCheck = () => {
    if (inputValue !== undefined) {
      if (inputValue?.length < 1) {
        setNotice('비밀번호를 입력해주세요');
      } else if (inputValue?.length < 6) {
        setNotice('비밀번호는 6자리 이상이어야 합니다');
      } else {
        setNotice('');
      }
    } else {
      setNotice('');
    }
  };

  const isValid = () => {
    switch (name) {
      case 'loginemail':
        emailCheck(inputValue);
        break;
      case 'email':
        emailCheck(userInfos?.email);
        break;
      case 'password':
        setNotice('');
        break;
      case 'inputPassword':
        pwCheck();
        break;
      case 'checkedpassword':
        break;
      case 'code':
        if (inputValue !== undefined) {
          if (inputValue?.length < 1) {
            setNotice('인증번호를 입력해주세요');
          } else if (inputValue?.length !== 6) {
            setNotice('인증번호는 6글자 입니다');
          } else {
            setNotice('');
          }
        } else {
          setNotice('');
        }
        break;
      case 'userName':
        if (!!!userInfos.name) {
          if (inputValue?.length < 1) {
            setNotice('이름을 입력해주세요');
          }
        } else {
          setNotice('');
        }
        break;
      case 'userPhone':
        if (inputValue?.length < 1) {
          setNotice('인증번호를 입력해주세요');
          break;
        } else if (inputValue?.length !== 6) {
          setNotice('인증번호는 6글자 입니다');
          break;
        }
        break;
      case 'userOffice':
        if (!!!userInfos?.agency) {
          if (userInfos?.agency?.length < 1) {
            setNotice('회사를 선택해주세요');
          }
        } else {
          setNotice('');
        }
        break;
      case 'userOfficeNumber':
        if (!!!userInfos?.officeNumber) {
          if (userInfos?.officeNumber?.length < 1) {
            setNotice('회사 전화번호를 선택해주세요');
          }
        } else {
          setNotice('');
        }
        break;
      default:
        setNotice('');
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
          if (name == 'userOfficeNumber') autoPhoneNumber(e);
        }}
      />
      <p className='notice'>{notice}</p>
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div`
  ${flexSet('center', 'center')};
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
