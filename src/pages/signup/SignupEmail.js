import React, { useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { getApi } from "../../common/api/index";
import ButtonBlue from "../../common/components/ButtonBlue";
import ButtonWhite from "../../common/components/ButtonWhite";
import Input from "../../common/components/Input";
import { flexSet, description } from "../../styles/variable";

const SignupEmail = ({ setIsCertEmail }) => {
  const [isCertNumber, setIsCertNumber] = useState(false);
  const [certNumber, setCertNumber] = useState();
  const [email, setEmail] = useState();
  const [code, setCode] = useState();

  const handleInputValue = debounce((e) => {
    const { name, value } = e;
    if (name == "email") {
      setEmail(value);
    } else if (name == "code") {
      setCode(value);
    }
  }, 200);

  const handleEmailSubmit = async () => {
    const params = {
      email,
    };
    try {
      const { status } = await getApi.post(`/email/code`, params);
      alert("인증코드 이메일 발송되었습니다.");
      if (status == 200) {
        setIsCertNumber(true);
      }
    } catch (error) {
      console.warn(error);
      alert("인증코드 이메일 발송 실패했습니다.");
    }
  };

  const handleSubmit = async () => {
    console.log("코드 인증");
    const params = {
      email,
      code,
    };
    console.log(params);
    try {
      const { status } = await getApi.patch(`/email/code`, params);
      if (status == 200) {
        alert("이메일 인증이 완료되었습니다.");
        setIsCertEmail(false);
      }
    } catch (error) {
      console.warn(error);
      alert("인증코드 이메일 발송 실패했습니다.");
    }
  };

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
            label={certNumber ? "재전송" : "전송"}
            onClick={handleEmailSubmit}
          />
        </div>
      </div>
      <p>
        본 메일은 아이디로 사용되며, 문의사항에 대한 답변을 회신받는
        이메일입니다
      </p>
      {isCertNumber && (
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
