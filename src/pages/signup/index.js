import React, { useState } from "react";
import { useNavigate } from "react-router";
import { debounce } from "lodash";
import { getApi } from "../../common/api/index";
import styled from "styled-components";
import { flexSet, formSet } from "../../styles/variable";
import SignupUserInfo from "./SignupUserInfo";
import SignupEmail from "./SignupEmail";
import SignupPhone from "./SignupPhone";

const Signup = () => {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [isCertEmail, setIsCertEmail] = useState(true);
  const [isCertEmailCode, setIsCertEmailCode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isCertPhone, setIsCertPhone] = useState(false);
  const [isCertPhoneCode, setIsCertPhoneCode] = useState(false);
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [officeNumber, setOfficeNumber] = useState();
  const [selectdValue, setSelectdValue] = useState();
  const [password, setPassword] = useState();
  const [checkpassword, setCheckPassword] = useState();
  const [pwValid, setPwValid] = useState(false);
  const [isUserInfo, setIsUserInfo] = useState(false);

  const handleInputValue = debounce((e) => {
    const { name, value } = e;
    setInputValue(value);
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "code":
        setCode(value);
        break;
      case "userName":
        setName(value);
        break;
      case "userPhone":
        setOfficeNumber(value);
        break;
      case "inputPassword":
        setPassword(value);
        break;
      case "Checkpassword":
        setCheckPassword(value);
        setPwValid(password == checkpassword ? true : false);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      default:
        break;
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
        setIsCertEmailCode(true);
      }
    } catch (error) {
      console.warn(error);
      alert("인증코드 이메일 발송 실패했습니다.");
    }
  };

  const handlePhoneSubmit = async () => {
    const params = {
      phoneNumber,
      name: "사용자",
    };
    try {
      const { status } = await getApi.post(`/phone/code`, params);
      alert("인증코드 휴대폰 발송되었습니다.");
      if (status == 200) {
        setIsCertPhoneCode(true);
      }
    } catch (error) {
      console.warn(error);
      alert("인증코드 휴대폰 발송 실패했습니다.");
    }
    // const params = {
    //   email: "icho0405@naver.com",
    // };
    // const data = await getApi.delete(`/dev/user`, params);
    // console.log(data);
  };

  const handleCertPhoneSubmit = async () => {
    const params = {
      phoneNumber,
      code,
    };
    try {
      const { status } = await getApi.patch(`/phone/code`, params);
      if (status == 200) {
        alert("휴대폰 인증이 완료되었습니다.");
        setIsCertPhone(true);
      }
    } catch (error) {
      console.warn();
      alert("휴대폰 인증이 실패했습니다.");
    }
  };

  const handleSubmit = async () => {
    const params = {
      email,
      code,
    };
    try {
      const { status } = await getApi.patch(`/email/code`, params);
      if (status == 200) {
        alert("이메일 인증이 완료되었습니다.");
        setIsCertEmail(false);
      }
    } catch (error) {
      console.warn();
      alert("인증코드 이메일 발송 실패했습니다.");
    }
  };

  const handleSingup = async () => {
    const params = {
      email,
      pw: password,
      name,
      officeNumber,
      agency: selectdValue,
      phoneNumber,
    };
    try {
      const { status } = await getApi.post(`/register`, params);
      console.log(status);
      if (status == 200) {
        alert("회원가입이 완료되었습니다 🎉");
        navigation("/");
      }
    } catch (error) {
      console.error();
    }
  };

  const getUserInfo = () => {
    console.log(isUserInfo);
    if (email && password && name && officeNumber && selectdValue) {
      setIsUserInfo(true);
    }
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
                  ? "이메일 인증을 시작합니다. 메일이 오지 않는 경우 스팸함을 확인해주세요."
                  : !isUserInfo
                  ? "나의 정보를 입력해주세요."
                  : "핸드폰 번호 인증을 시작합니다"}
              </p>
            </div>
            {isCertEmail ? (
              <SignupEmail
                email={email}
                code={code}
                isCertEmailCode={isCertEmailCode}
                handleInputValue={handleInputValue}
                handleEmailSubmit={handleEmailSubmit}
                handleSubmit={handleSubmit}
              />
            ) : !isUserInfo ? (
              <SignupUserInfo
                selectdValue={selectdValue}
                setSelectdValue={setSelectdValue}
                handleInputValue={handleInputValue}
                setOfficeNumber={setOfficeNumber}
                getUserInfo={getUserInfo}
                inputValue={inputValue}
                pwValid={pwValid}
              />
            ) : (
              <SignupPhone
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
  ${flexSet("center", "center")};
  background-color: ${({ theme }) => theme.colors.lightGray};

  main {
    max-width: 1440px;
    height: 100vh;

    .wrap {
      ${flexSet("center", "center")};
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
