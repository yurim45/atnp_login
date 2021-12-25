import React, { useState } from "react";
import styled from "styled-components";
import ButtonBlue from "../../common/components/ButtonBlue";
import ButtonWhite from "../../common/components/ButtonWhite";
import Input from "../../common/components/Input";
import { flexSet, formSet } from "../../styles/variable";

const SignupEmail = () => {
  const [certNumber, setCertNumber] = useState(false);
  const handleSubmit = () => {
    alert("인증코드 이메일 발송이 되었습니다.");
    setCertNumber(true);
  };

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
            <div className='form'>
              <div className='emailWrap'>
                <Input type='text' dec='이메일' name='email' />
                <ButtonWhite
                  label={certNumber ? "재전송" : "전송"}
                  onClick={handleSubmit}
                />
              </div>
            </div>
            <p>
              본 메일은 아이디로 사용되며, 문의사항에 대한 답변을 회신받는
              이메일입니다
            </p>
            {certNumber && (
              <div className='form'>
                <div className='emailWrap'>
                  <Input
                    type='text'
                    dec='인증코드를 입력해주세요.'
                    name='email'
                  />
                  <ButtonBlue label={"인증완료"} onClick={handleSubmit} />
                </div>
                <div className='timer'>0:00</div>
              </div>
            )}
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

        .form {
          .emailWrap {
            ${flexSet("center", "center")};
            gap: 12px;
            width: 354px;

            button {
              width: 95px;
            }
          }
          .timer {
            font-size: 0.9rem;
            color: ${({ theme }) => theme.colors.red};
            text-align: right;
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
