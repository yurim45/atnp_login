import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../common/data/signup/action';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { flexSet, formSet } from '../../styles/variable';
import SignupUserInfo from './SignupUserInfo';
import SignupEmail from './SignupEmail';
import SignupPhone from './SignupPhone';

const Signup = () => {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [isCertEmail, setIsCertEmail] = useState(true);
  const [isCertEmailCode, setIsCertEmailCode] = useState(false);
  const [isCertPhone, setIsCertPhone] = useState(false);
  const [isCertPhoneCode, setIsCertPhoneCode] = useState(false);
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const [checkpassword, setCheckPassword] = useState();
  const [pwValid, setPwValid] = useState(false);
  const [isUserInfo, setIsUserInfo] = useState(false);

  const userInfos = useSelector((state) => state.userInfos);
  const dispatch = useDispatch();

  const handleInputValue = debounce((e) => {
    const { name, value } = e;
    setInputValue(value);
    switch (name) {
      case 'code':
        setCode(value);
        break;
      case 'inputPassword':
        console.log('inputPassword', value);
        setPassword(value);
        break;
      case 'checkedpassword':
        console.log('checkedpassword', value);
        setCheckPassword(value);
        setPwValid(password === checkpassword ? true : false);
        break;
      default:
        break;
    }
  }, 200);

  const handleEmailSubmit = async () => {
    const params = {
      email: userInfos.email,
    };
    console.log('인증코드 이메일 발송', params);
    setIsCertEmailCode(true);
    // try {
    //   const { status } = await getApi.post(`/email/code`, params);
    //   alert('인증코드 이메일 발송되었습니다.');
    //   if (status == 200) {
    //     setIsCertEmailCode(true);
    //   }
    // } catch (error) {
    //   console.warn(error);
    //   alert('인증코드 이메일 발송 실패했습니다.');
    // }
  };

  const handleSubmit = async () => {
    const params = {
      email: userInfos.email,
      code,
    };
    console.log('이메일 인증이 완료', params);
    setIsCertEmail(false);
    // try {
    //   const { status } = await getApi.patch(`/email/code`, params);
    //   if (status == 200) {
    //     alert('이메일 인증이 완료되었습니다.');
    //     setIsCertEmail(false);
    //   }
    // } catch (error) {
    //   console.warn(error);
    //   alert('인증코드 이메일 발송 실패했습니다.');
    // }
  };

  const handlePhoneSubmit = async () => {
    const params = {
      phoneNumber: userInfos.phoneNumber,
      name: userInfos.name,
    };
    console.log('인증코드 휴대폰 발송', params);
    setIsCertPhoneCode(true);
    // try {
    //   const { status } = await getApi.post(`/phone/code`, params);
    //   alert('인증코드 휴대폰 발송되었습니다.');
    //   if (status == 200) {
    //     setIsCertPhoneCode(true);
    //   }
    // } catch (error) {
    //   console.warn(error);
    //   alert('인증코드 휴대폰 발송 실패했습니다.');
    // }
    // const params = {
    //   email: "icho0405@naver.com",
    // };
    // const data = await getApi.delete(`/dev/user`, params);
    // console.log(data);
  };

  const handleCertPhoneSubmit = async () => {
    const params = {
      phoneNumber: userInfos.phoneNumber,
      code,
    };
    console.log('휴대폰 인증이 완료', params);
    setIsCertPhone(true);
    // try {
    //   const { status } = await getApi.patch(`/phone/code`, params);
    //   if (status == 200) {
    //     alert('휴대폰 인증이 완료되었습니다.');
    //     setIsCertPhoneCode(true);
    //   }
    // } catch (error) {
    //   console.warn(error);
    //   alert('휴대폰 인증이 실패했습니다.');
    // }
  };

  const handleSingup = async () => {
    const params = {
      email: userInfos.email,
      pw: userInfos.pw,
      name: userInfos.name,
      officeNumber: userInfos.officeNumber,
      agency: userInfos.agency,
      phoneNumber: userInfos.phoneNumber,
    };
    console.log('회원가입이 완료', params);
    navigation('/');
    dispatch(clear());
    // try {
    //   const { status } = await getApi.post(`/register`, params);
    //   if (status == 200) {
    //     alert('회원가입이 완료되었습니다 🎉');
    //     navigation('/');
    //     dispatch(clear());
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const getUserInfo = () => {
    const { email, pw, name, officeNumber, agency } = userInfos;
    if (!email || !pw || !name || !officeNumber || !agency) {
      setIsUserInfo(false);
      alert('정보를 모두 입력하세요');
      return;
    }
    setIsUserInfo(true);
  };

  return (
    <SignupForm>
      <main>
        <div className='wrap'>
          <div className='emailBox'>
            <div className='title'>
              <h1>회원가입</h1>
              <p>
                {isCertEmail
                  ? '이메일 인증을 시작합니다. 메일이 오지 않는 경우 스팸함을 확인해주세요.'
                  : !isUserInfo
                  ? '나의 정보를 입력해주세요.'
                  : '핸드폰 번호 인증을 시작합니다'}
              </p>
            </div>
            {isCertEmail ? (
              <SignupEmail
                code={code}
                isCertEmailCode={isCertEmailCode}
                handleInputValue={handleInputValue}
                handleEmailSubmit={handleEmailSubmit}
                handleSubmit={handleSubmit}
              />
            ) : !isUserInfo ? (
              <SignupUserInfo
                inputValue={inputValue}
                handleInputValue={handleInputValue}
                getUserInfo={getUserInfo}
              />
            ) : (
              <SignupPhone
                code={code}
                isCertPhone={isCertPhone}
                handlePhoneSubmit={handlePhoneSubmit}
                handleCertPhoneSubmit={handleCertPhoneSubmit}
                isCertPhoneCode={isCertPhoneCode}
                handleInputValue={handleInputValue}
                handleSingup={handleSingup}
              />
            )}
          </div>
        </div>
      </main>
    </SignupForm>
  );
};

export default Signup;

const SignupForm = styled.section`
  ${flexSet('center', 'center')};
  background-color: ${({ theme }) => theme.colors.lightGray};

  main {
    max-width: 1440px;
    height: 100vh;

    .wrap {
      ${flexSet('center', 'center')};
      height: 100%;

      .emailBox {
        ${formSet};

        .title {
          margin-top: 36px;
          margin-bottom: 36px;

          h1 {
            margin-bottom: 18px;
            font-size: 2.4rem;
            font-weight: 800;
            color: ${({ theme }) => theme.colors.black};
          }

          p {
            font-size: 0.9rem;
            color: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }
  }
`;
