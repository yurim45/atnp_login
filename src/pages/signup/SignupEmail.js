import React, { useState } from "react";
import styled from "styled-components";
import ButtonWhite from "../../common/components/ButtonWhite";
import Input from "../../common/components/Input";
import { flexSet, formSet } from "../../styles/variable";

const SignupEmail = () => {
  return (
    <SignupEmailForm>
      <main>
        <div className='wrap'>
          <div className='emailBox'>
            <div className='title'>
              <h1>회원가입</h1>
              <p>
                이메일 인증을 시작합니다. 메일이 오지 않는 경우 스팸함을
                확인해주세요.
              </p>
            </div>
            <form>
              <div className='emailWrap'>
                <Input type='text' dec='이메일' name='email' />
                <ButtonWhite label={"전송"} />
              </div>
            </form>
            <p>
              본 메일은 아이디로 사용되며, 문의사항에 대한 답변을 회신받는
              이메일입니다
            </p>
          </div>
        </div>
      </main>
    </SignupEmailForm>
  );
};

export default SignupEmail;

const SignupEmailForm = styled.section`
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

        form {
          margin-top: 40px;

          .emailWrap {
            ${flexSet("center", "center")};
            gap: 12px;
            width: 354px;

            button {
              width: 95px;
            }
          }
        }

        p {
          font-size: 0.9rem;
          color: ${({ theme }) => theme.colors.deepGray};
        }
      }
    }
  }
`;
