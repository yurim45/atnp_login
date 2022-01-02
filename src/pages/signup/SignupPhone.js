import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhone } from '../../common/data/signup/action';
import styled from 'styled-components';
import ButtonBlue from '../../components/ButtonBlue';
import ButtonGray from '../../components/ButtonGray';
import ButtonWhite from '../../components/ButtonWhite';
import Timer from '../../components/Timer';
import Input from '../../components/Input';
import { flexSet, description } from '../../styles/variable';

const SignupPhone = ({
  code,
  isCertPhone,
  isCertPhoneCode,
  handleInputValue,
  handlePhoneSubmit,
  handleSingup,
  handleCertPhoneSubmit,
}) => {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.userInfos);
  const [codeNotice, setCodeNotice] = useState('');
  const [phoneNotice, setPhoneNotice] = useState('');

  const codeCheck = () => {
    if (!!code) {
      if (code?.length < 2) {
        setCodeNotice('인증번호를 입력해주세요');
      } else if (code?.length !== 6) {
        setCodeNotice('인증번호는 6글자 입니다');
      } else {
        setCodeNotice('');
      }
    } else {
      setCodeNotice('');
    }
  };

  const phoneNumberCheck = (value) => {
    const result = String(value)
      .toLowerCase()
      .match(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);
    if (!!value) {
      if (value?.length < 1) {
        setPhoneNotice('휴대폰 번호를 입력해주세요');
      } else if (result === null) {
        setPhoneNotice('올바른 휴대폰 번호가 아닙니다');
      } else {
        setPhoneNotice('');
      }
    } else {
      setPhoneNotice('');
    }
  };

  const autoPhoneNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/, '');
    dispatch(getPhone(e.target));
  };

  useEffect(() => {
    codeCheck();
    phoneNumberCheck(userInfos?.phoneNumber);
  }, [code, userInfos?.phoneNumber]);

  return (
    <SignupEmailForm>
      <div className='form'>
        <div className='Wrap'>
          <Input
            type='text'
            desc='- 를 제와하고 핸드폰 번호를 입력해주세요'
            name='phone'
            onChange={(target) => dispatch(getPhone(target))}
            inputValue={userInfos?.phoneNumber}
            autoPhoneNumber={autoPhoneNumber}
            notice={phoneNotice}
          />
          <ButtonWhite
            label={isCertPhoneCode ? '재전송' : '전송'}
            onClick={handlePhoneSubmit}
          />
        </div>
      </div>
      <p>인증된 모바일로 문의사항에 대한 답변 알림이 전송됩니다</p>
      {isCertPhoneCode && (
        <div className='form'>
          <div className='Wrap'>
            <Input
              type='text'
              desc='인증코드를 입력해주세요.'
              name='code'
              onChange={handleInputValue}
              inputValue={code}
              notice={codeNotice}
            />
            {!isCertPhone ? (
              <ButtonBlue label={'인증완료'} onClick={handleCertPhoneSubmit} />
            ) : (
              <ButtonGray label={'인증완료'} />
            )}
          </div>
          {!isCertPhone && <Timer minute={2} second={59} />}
        </div>
      )}
      <div className='btnWrap'>
        {!isCertPhone ? (
          <ButtonGray label={'회원가입 하기'} />
        ) : (
          <ButtonBlue label={'회원가입 하기'} onClick={handleSingup} />
        )}
      </div>
    </SignupEmailForm>
  );
};

export default SignupPhone;

const SignupEmailForm = styled.section`
  .form {
    .Wrap {
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

  .btnWrap {
    margin-top: 40px;
  }
`;
