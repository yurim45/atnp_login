import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getName,
  getOfficeNumber,
  getAgency,
} from '../../common/data/signup/action';
import styled from 'styled-components';
import ButtonBlue from '../../components/ButtonBlue';
import Input from '../../components/Input';
import SelectBox from '../../components/SelectBox';
import { description } from '../../styles/variable';

const SignupUserInfo = ({
  inputValue,
  handleInputValue,
  getUserInfo,
  checkPwNotice,
}) => {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.userInfos);
  const [nameNotice, setNameNotice] = useState('');
  const [officeNumberNotice, setOfficeNumberNotice] = useState('');

  const nameCheck = (value) => {
    if (!value) {
      if (value?.length < 1) {
        setNameNotice('이름을 입력해주세요');
      }
    } else {
      setNameNotice('');
    }
  };

  const officeNumberCheck = (value) => {
    if (!value) {
      if (value?.length < 1) {
        setOfficeNumberNotice('회사 전화번호를 입력해주세요');
      }
    } else {
      setOfficeNumberNotice('');
    }
  };

  const autoPhoneNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/, '');
    dispatch(getOfficeNumber(e.target));
  };

  useEffect(() => {
    nameCheck(userInfos.name);
    officeNumberCheck(userInfos.officeNumber);
  }, [userInfos.name, userInfos?.officeNumber]);

  return (
    <SignupUserForm>
      <div className='form'>
        <p>이름과 회사정보를 입력해주세요</p>
        <Input
          type='text'
          desc='이름'
          name='userName'
          onChange={(target) => dispatch(getName(target))}
          inputValue={userInfos?.name}
          notice={nameNotice}
        />
        <SelectBox
          type='text'
          desc='회사를 선택해주세요.'
          name='userOffice'
          list={OFFICE_LIST}
          inputValue={inputValue}
          onChange={handleInputValue}
          onClick={(target) => dispatch(getAgency(target))}
          value={userInfos?.agency}
        />
        <Input
          type='text'
          desc='- 를 제외한 회사 전화번호'
          name='userOfficeNumber'
          onChange={(target) => dispatch(getOfficeNumber(target))}
          autoPhoneNumber={autoPhoneNumber}
          inputValue={inputValue}
          notice={officeNumberNotice}
        />
        <p>
          사용할 비밀번호를 입력해주세요 (6글자 이상, 한글과 영문을 구분합니다.)
        </p>
        <Input
          type='password'
          desc='비밀번호'
          name='inputPassword'
          onChange={handleInputValue}
          inputValue={inputValue}
        />
        <Input
          type='password'
          desc='비밀번호 확인'
          name='checkedpassword'
          onChange={handleInputValue}
          inputValue={inputValue}
          notice={checkPwNotice}
        />
        <ButtonBlue label={'완료'} onClick={getUserInfo} />
      </div>
    </SignupUserForm>
  );
};

export default SignupUserInfo;

const OFFICE_LIST = [
  {
    id: 1,
    name: '숙명여자대학교',
  },
  {
    id: 2,
    name: '한국과학기술원',
  },
  {
    id: 3,
    name: '가천대학교',
  },
  {
    id: 4,
    name: '가천대학교산학협력단',
  },
  {
    id: 5,
    name: '가톨릭관동대학교',
  },
  {
    id: 6,
    name: '건국대글로벌',
  },
  {
    id: 7,
    name: '건국대산단',
  },
  {
    id: 8,
    name: '건국대학교',
  },
  {
    id: 9,
    name: '경희대학교',
  },
];

const SignupUserForm = styled.section`
  p {
    ${description}
  }
`;
