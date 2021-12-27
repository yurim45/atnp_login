import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from '../../common/data/signup/action';
import styled from 'styled-components';
import ButtonBlue from '../../components/ButtonBlue';
import ButtonWhite from '../../components/ButtonWhite';
import Timer from '../../components/Timer';
import Input from '../../components/Input';
import { flexSet, description } from '../../styles/variable';

const SignupEmail = ({
  code,
  isCertEmailCode,
  handleInputValue,
  handleEmailSubmit,
  handleSubmit,
  inputValue,
}) => {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.userInfos);
  const [emailNotice, setEmailNotice] = useState('');
  const [codeNotice, setCodeNotice] = useState('');

  const emailCheck = (value) => {
    const result = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (value !== undefined) {
      if (value?.length < 1) {
        setEmailNotice('이메일을 입력해주세요');
      } else if (value?.length > 1 && result == null) {
        setEmailNotice('올바른 이메일 형식이 아닙니다');
      } else {
        setEmailNotice('');
      }
    } else {
      setEmailNotice('');
    }
  };

  const codeCheck = () => {
    if (inputValue !== undefined) {
      if (inputValue?.length < 1) {
        setCodeNotice('인증번호를 입력해주세요');
      } else if (inputValue?.length !== 6) {
        setCodeNotice('인증번호는 6글자 입니다');
      } else {
        setCodeNotice('');
      }
    } else {
      setCodeNotice('');
    }
  };

  useEffect(() => {
    codeCheck();
    emailCheck(userInfos?.email);
  }, [userInfos?.email, code]);

  return (
    <SignupEmailForm>
      <div className='form'>
        <div className='emailWrap'>
          <Input
            type='text'
            desc='이메일'
            name='email'
            onChange={(target) => dispatch(getEmail(target))}
            inputValue={userInfos?.email}
            notice={emailNotice}
          />
          <ButtonWhite
            label={isCertEmailCode ? '재전송' : '전송'}
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
              notice={codeNotice}
            />
            <ButtonBlue label={'인증완료'} onClick={handleSubmit} />
          </div>
          <Timer minute={2} second={59} />
        </div>
      )}
    </SignupEmailForm>
  );
};

export default SignupEmail;

const SignupEmailForm = styled.section`
  .form {
    .emailWrap {
      ${flexSet('center', 'center')};
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
