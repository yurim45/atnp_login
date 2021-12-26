import React, { useState } from "react";
import styled from "styled-components";
import ButtonBlue from "../../common/components/ButtonBlue";
import ButtonGray from "../../common/components/ButtonGray";
import ButtonWhite from "../../common/components/ButtonWhite";
import Input from "../../common/components/Input";
import { flexSet, description } from "../../styles/variable";

const SignupPhone = ({
  email,
  code,
  isCertPhone,
  isCertPhoneCode,
  handleInputValue,
  handlePhoneSubmit,
  handleSingup,
  handleCertPhoneSubmit,
}) => {
  return (
    <SignupEmailForm>
      <div className='form'>
        <div className='emailWrap'>
          <Input
            type='text'
            desc='- 를 제와하고 핸드폰 번호를 입력해주세요'
            name='phone'
            onChange={handleInputValue}
            inputValue={email}
          />
          <ButtonWhite
            label={isCertPhoneCode ? "재전송" : "전송"}
            onClick={handlePhoneSubmit}
          />
        </div>
      </div>
      <p>인증된 모바일로 문의사항에 대한 답변 알림이 전송됩니다</p>
      {isCertPhoneCode && (
        <div className='form'>
          <div className='emailWrap'>
            <Input
              type='text'
              desc='인증코드를 입력해주세요.'
              name='code'
              onChange={handleInputValue}
              inputValue={code}
            />
            {!isCertPhone ? (
              <ButtonBlue label={"인증완료"} onClick={handleCertPhoneSubmit} />
            ) : (
              <ButtonGray label={"인증완료"} />
            )}
          </div>
          <div className='timer'>{!isCertPhone && "0:00"}</div>
        </div>
      )}
      <div className='btnWrap'>
        {!isCertPhone ? (
          <ButtonGray label={"회원가입 하기"} />
        ) : (
          <ButtonBlue label={"회원가입 하기"} onClick={handleSingup} />
        )}
      </div>
    </SignupEmailForm>
  );
};

export default SignupPhone;

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

  .btnWrap {
    margin-top: 40px;
  }
`;
