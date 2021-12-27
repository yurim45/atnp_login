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
  const [inputValue, setInputValue] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputValue = debounce((e) => {
    const { name, value } = e;
    setInputValue(value);
    if (name == 'loginemail') {
      setEmail(value);
    } else if (name == 'password') {
      setPassword(value);
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
              />
              <Input
                type='password'
                desc='비밀번호'
                name='password'
                inputValue={password}
                onChange={handleInputValue}
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
