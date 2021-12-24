import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonBlue from "../common/components/ButtonBlue";
import ButtonWhite from "../common/components/ButtonWhite";
import Input from "../common/components/Input";
import { flexSet, formSet } from "../styles/variable";

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
  const navigation = useNavigate();

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
              <footer>
                <ButtonBlue
                  label={"로그인"}
                  onClick={() => {
                    navigation("/signupEmail");
                  }}
                />
                <div>또는</div>
              </footer>
            </form>
            <ButtonWhite
              label={"회원가입"}
              onClick={() => {
                navigation("/signupEmail");
              }}
            />
          </div>
        </div>
      </main>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.section`
  ${flexSet("center", "center")};
  background-color: ${({ theme }) => theme.colors.lightGray};

  main {
    max-width: 1440px;
    height: 100vh;

    .wrap {
      ${flexSet("center", "center")};
      height: 100%;

      .loginBox {
        ${formSet};

        .title {
          margin-top: 36px;
          margin-bottom: 36px;
          text-align: center;

          h1 {
            margin-bottom: 18px;
            font-size: 2.4rem;
            font-weight: 800;
            color: ${({ theme }) => theme.colors.black};
          }

          p {
            font-size: 0.9rem;
            color: ${({ theme }) => theme.colors.deepGray};
          }
        }

        form {
          margin-top: 40px;

          footer {
            margin-top: 36px;

            div {
              ${flexSet("center", "center")};
              margin-top: 15px;
              margin-bottom: 10px;
              font-size: 0.9rem;
              color: ${({ theme }) => theme.colors.blue};
            }
          }
        }
      }
    }
  }
`;
