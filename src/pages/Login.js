import React, { useState } from 'react';
import { getApi } from '../common/api/index';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ButtonBlue from '../components/ButtonBlue';
import ButtonWhite from '../components/ButtonWhite';
import Input from '../components/Input';
import { flexSet, formSet, description } from '../styles/variable';

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailNotice, setEmailNotice] = useState('');
  const [pwNotice, setPwNotice] = useState('');

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

  const pwCheck = (value) => {
    if (value !== undefined) {
      if (value?.length < 1) {
        setPwNotice('비밀번호를 입력해주세요');
      }
    } else {
      setPwNotice('');
    }
  };

  const handleInputValue = debounce((e) => {
    const { name, value } = e;
    if (name === 'loginemail') {
      setEmail(value);
      emailCheck(value);
    } else if (name === 'password') {
      setPassword(value);
      pwCheck(value);
    }
  }, 200);

  const handleLogin = async () => {
    const params = {
      email,
      pw: password,
    };
    try {
      const { status } = await getApi.post(`/login`, params);
      if (status == 200) {
        navigation('/page404');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginForm>
      <main>
        <div className='wrap'>
          <div className='loginBox'>
            <div className='title'>
              <h1>YETA 고객센터 로그인</h1>
              <p>로그인을 위해 아래의 정보를 입력해주세요</p>
            </div>
            <div className='form'>
              <Input
                type='text'
                desc='이메일'
                name='loginemail'
                inputValue={email}
                onChange={handleInputValue}
                notice={emailNotice}
              />
              <Input
                type='password'
                desc='비밀번호'
                name='password'
                inputValue={password}
                onChange={handleInputValue}
                notice={pwNotice}
              />
              <footer>
                <ButtonBlue label={'로그인'} onClick={handleLogin} />
                <div>또는</div>
              </footer>
            </div>
            <ButtonWhite
              label={'회원가입'}
              onClick={() => {
                navigation('/signup');
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
  ${flexSet('center', 'center')};
  background-color: ${({ theme }) => theme.colors.lightGray};

  main {
    max-width: 1440px;
    height: 100vh;

    .wrap {
      ${flexSet('center', 'center')};
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
            ${description}
          }
        }

        .form {
          margin-top: 40px;

          footer {
            margin-top: 36px;

            div {
              ${flexSet('center', 'center')};
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
