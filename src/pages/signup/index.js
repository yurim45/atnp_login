import React, { useState } from "react";
import styled from "styled-components";
import { flexSet, formSet } from "../../styles/variable";
import SignupUserInfo from "./SignupUserInfo";
import SignupEmail from "./SignupEmail";

const Signup = () => {
  const [certEmail, setCertEmail] = useState(true);

  return (
    <SignupForm>
      <main>
        <div className='wrap'>
          <div className='emailBox'>
            <div className='title'>
              <h1>회원가입</h1>
              <p>
                {certEmail
                  ? "이메일 인증을 시작합니다. 메일이 오지 않는 경우 스팸함을 확인해주세요."
                  : "나의 정보를 입력해주세요."}
              </p>
            </div>
            {certEmail ? (
              <SignupEmail setCertEmail={setCertEmail} />
            ) : (
              <SignupUserInfo />
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
