import React, { useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import ButtonBlue from "../../common/components/ButtonBlue";
import Input from "../../common/components/Input";
import SelectBox from "../../common/components/SelectBox";
import { flexSet, formSet, description } from "../../styles/variable";

const OFFICE_LIST = [
  {
    id: 1,
    name: "숙명여자대학교",
  },
  {
    id: 2,
    name: "한국과학기술원",
  },
  {
    id: 3,
    name: "가천대학교",
  },
  {
    id: 4,
    name: "가천대학교산학협력단",
  },
  {
    id: 5,
    name: "가톨릭관동대학교",
  },
  {
    id: 6,
    name: "건국대글로벌",
  },
  {
    id: 7,
    name: "건국대산단",
  },
  {
    id: 8,
    name: "건국대학교",
  },
  {
    id: 9,
    name: "경희대학교",
  },
];

const SignupUserInfo = ({
  inputValue,
  handleInputValue,
  setOfficeNumber,
  getUserInfo,
  selectdValue,
  setSelectdValue,
  pwValid,
}) => {
  const autoPhoneNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/, "");
    setOfficeNumber(e.target.value);
  };

  return (
    <SignupUserForm>
      <div className='form'>
        <p>이름과 회사정보를 입력해주세요</p>
        <Input
          type='text'
          desc='이름'
          name='userName'
          onChange={handleInputValue}
          inputValue={inputValue}
        />
        <SelectBox
          type='text'
          desc='회사를 선택해주세요.'
          name='userOffice'
          list={OFFICE_LIST}
          inputValue={inputValue}
          onChange={handleInputValue}
          selectdValue={selectdValue}
          setSelectdValue={setSelectdValue}
        />
        <Input
          type='text'
          desc='- 를 제외한 회사 전화번호'
          name='userPhone'
          onChange={handleInputValue}
          autoPhoneNumber={autoPhoneNumber}
          inputValue={inputValue}
        />
        <p>
          사용할 비밀번호를 입력해주세요 (6글자 이상, 한글과 영문을 구분합니다.)
        </p>
        <Input
          type='password'
          desc='비밀번호'
          name='inputPassword'
          onChange={handleInputValue}
        />
        <Input
          type='password'
          desc='비밀번호 확인'
          name='Checkpassword'
          onChange={handleInputValue}
          pwValid={pwValid}
        />
        <ButtonBlue
          label={"완료"}
          onClick={() => {
            getUserInfo();
          }}
        />
      </div>
    </SignupUserForm>
  );
};

export default SignupUserInfo;

const SignupUserForm = styled.section`
  p {
    ${description}
  }
`;
