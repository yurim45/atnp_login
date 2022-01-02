import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../styles/variable';

const Input = ({
  type,
  desc,
  name,
  onChange,
  value,
  autoPhoneNumber,
  notice,
}) => {
  return (
    <InputWrap>
      <input
        type={type}
        value={value}
        placeholder={desc}
        name={name}
        onChange={(e) => {
          // focus를 잃은 순간 작동
          if (name === e.target.name) {
            onChange(e.target);
          }
        }}
        onInput={(e) => {
          // 사용자가 입력할 때 마다 바로바로 데이터 확인
          if (autoPhoneNumber) autoPhoneNumber(e);
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
