import React, { useState } from "react";
import styled from "styled-components";
import Input from "../common/components/Input";
import { flexSet } from "../styles/variable";

const LoginInfo = [
  {
    id: 1,
    type: "text",
    name: "email",
    dec: "이메일",
  },
  {
    id: 2,
    type: "password",
    name: "password",
    dec: "비밀번호",
  },
];

const Login = () => {
  return (
    <LoginForm>
      <main>
        <div className='wrap'>
          <div className='loginBox'>
            <div className='title'>
              <h1>YETA 고객센터 로그인</h1>
              <p>로그인을 위해 아래의 정보를 입력해주세요</p>
            </div>
            <form>
              {LoginInfo?.map((info) => {
                return (
                  <Input
                    key={info.id}
                    type={info.type}
                    dec={info.dec}
                    name={info.name}
                  />
                );
              })}
            </form>
          </div>
        </div>
      </main>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.section`
  ${flexSet("center", "center")};

  main {
    max-width: 1440px;
    height: 100vh;

    .wrap {
      ${flexSet("center", "center")};

      height: 100%;

      .loginBox {
        width: 540px;
        padding: 40px;
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
        box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;

        .title {
          margin-bottom: 15px;
          text-align: center;

          h1 {
            margin-bottom: -5px;
            font-size: 2.5rem;
            color: ${({ theme }) => theme.colors.black};
          }

          p {
            font-size: 0.95rem;
            color: ${({ theme }) => theme.colors.deepGray};
          }
        }

        form {
          margin-top: 40px;
        }
      }
    }
  }
`;
