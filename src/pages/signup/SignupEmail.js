import React, { useState } from "react";
import styled from "styled-components";
import ButtonBlue from "../../common/components/ButtonBlue";
import ButtonWhite from "../../common/components/ButtonWhite";
import Input from "../../common/components/Input";
import { flexSet, description } from "../../styles/variable";

const SignupEmail = ({
  email,
  code,
  isCertEmailCode,
  handleInputValue,
  handleEmailSubmit,
  handleSubmit,
}) => {
  return (
    <SignupEmailForm>
      <div className='form'>
        <div className='emailWrap'>
          <Input
            type='text'
            desc='이메일'
            name='email'
            onChange={handleInputValue}
            inputValue={email}
          />
          <ButtonWhite
            label={isCertEmailCode ? "재전송" : "전송"}
            onClick={handleEmailSubmit}
          />
        </div>
      </div>
      <p>
        본 메일은 아이디로 사용되며, 문의사항에 대한 답변을 회신받는
        이메일입니다
      </p>
      {isCertEmailCode && (
        <div className='form'>
          <div className='emailWrap'>
            <Input
              type='text'
              desc='인증코드를 입력해주세요.'
              name='code'
              onChange={handleInputValue}
              inputValue={code}
            />
            <ButtonBlue label={"인증완료"} onClick={handleSubmit} />
          </div>
          <div className='timer'>0:00</div>
        </div>
      )}
    </SignupEmailForm>
  );
};

export default SignupEmail;

const SignupEmailForm = styled.section`
  .form {
    .emailWrap {
      ${flexSet("center", "center")};
      gap: 12px;

      button {
        width: 120px;
      }
    }
    .timer {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.red};
      text-align: right;
    }
  }
  p {
    ${description}
  }
`;
