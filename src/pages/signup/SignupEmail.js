import React, { useState } from "react";
import styled from "styled-components";
import ButtonBlue from "../../common/components/ButtonBlue";
import ButtonWhite from "../../common/components/ButtonWhite";
import Input from "../../common/components/Input";
import { flexSet, formSet, description } from "../../styles/variable";

const SignupEmail = ({ setCertEmail }) => {
  const [certNumber, setCertNumber] = useState(false);

  const handleEmailSubmit = () => {
    alert("인증코드 이메일 발송되었습니다.");
    setCertNumber(true);
  };

  const handleSubmit = () => {
    alert("이메일 인증이 완료되었습니다.");
    setCertEmail(false);
  };

  return (
    <SignupEmailForm>
      <div className='form'>
        <div className='emailWrap'>
          <Input type='text' desc='이메일' name='email' />
          <ButtonWhite
            label={certNumber ? "재전송" : "전송"}
            onClick={handleEmailSubmit}
          />
        </div>
      </div>
      <p>
        본 메일은 아이디로 사용되며, 문의사항에 대한 답변을 회신받는
        이메일입니다
      </p>
      {certNumber && (
        <div className='form'>
          <div className='emailWrap'>
            <Input type='text' desc='인증코드를 입력해주세요.' name='code' />
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
        width: 95px;
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
