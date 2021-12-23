import React, { useState } from "react";
import styled from "styled-components";
import { flexSet } from "../styles/variable";

const Login = () => {
  return (
    <LoginForm>
      <main>
        <div className='wrap'>
          <div className='loginBox'>
            <div>
              <h1>YETA 고객센터 로그인</h1>
              <p>로그인을 위해 아래의 정보를 입력해주세요</p>
            </div>
            <form></form>
          </div>
        </div>
      </main>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.section`
  ${flexSet("center", "center")}

  main {
    width: 1440px;
    height: 100vh;

    .wrap {
      ${flexSet("center", "center")}
      width: 100%;
      height: 100%;

      .loginBox {
        width: 540px;
        padding: 40px;
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
        box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
      }
    }
  }
`;
