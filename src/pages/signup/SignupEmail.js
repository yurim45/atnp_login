import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from '../../common/data/signup/action';
import styled from 'styled-components';
import ButtonBlue from '../../components/ButtonBlue';
import ButtonWhite from '../../components/ButtonWhite';
import Timer from '../../components/Timer';
import Input from '../../components/Input';
import { flexSet, description } from '../../styles/variable';

const SignupEmail = ({
  code,
  isCertEmailCode,
  handleInputValue,
  handleEmailSubmit,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.userInfos);

  return (
    <SignupEmailForm>
      <div className='form'>
        <div className='emailWrap'>
          <Input
            type='text'
            desc='이메일'
            name='email'
            onChange={(target) => dispatch(getEmail(target))}
            inputValue={userInfos?.email}
          />
          <ButtonWhite
            label={isCertEmailCode ? '재전송' : '전송'}
            onClick={handleEmailSubmit}
          />
        </div>
      </div>
      <p>
        본 메일은 아이디로 사용되며, 문의사항에 대한 답변을 회신받는
        이메일입니다
      </p>
      {isCertEmailCode && (
        <div className='form'>
          <div className='emailWrap'>
            <Input
              type='text'
              desc='인증코드를 입력해주세요.'
              name='code'
              onChange={handleInputValue}
              inputValue={code}
            />
            <ButtonBlue label={'인증완료'} onClick={handleSubmit} />
          </div>
          <Timer />
        </div>
      )}
    </SignupEmailForm>
  );
};

export default SignupEmail;

const SignupEmailForm = styled.section`
  .form {
    .emailWrap {
      ${flexSet('center', 'center')};
      gap: 12px;

      button {
        width: 120px;
      }
    }
    .timer {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.red};
      text-align: right;
    }
  }
  p {
    ${description}
  }
`;
