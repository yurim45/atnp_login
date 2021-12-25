import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ButtonBlue from "../../common/components/ButtonBlue";
import Input from "../../common/components/Input";
import SelectBox from "../../common/components/SelectBox";
import { flexSet, formSet, description } from "../../styles/variable";

const OFFICE_INFO = [
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

const SignupUserInfo = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    console.log("=====완료");
    navigation("/");
  };

  return (
    <SignupUserForm>
      <form>
        <p>이름과 회사정보를 입력해주세요</p>
        <Input type='text' desc='이름' name='userName' />
        <SelectBox
          type='text'
          desc='회사를 선택해주세요.'
          name='userOffice'
          list={OFFICE_INFO}
        />
        <Input type='text' desc='- 를 제외한 회사 전화번호' name='userPhone' />
        <p>
          사용할 비밀번호를 입력해주세요 (6글자 이상, 한글과 영문을 구분합니다.)
        </p>
        <Input type='password' desc='비밀번호' name='password' />
        <Input type='password' desc='비밀번호 확인' name='password' />
        <ButtonBlue label={"완료"} onClick={handleSubmit} />
      </form>
    </SignupUserForm>
  );
};

export default SignupUserInfo;

const SignupUserForm = styled.section`
  p {
    ${description}
  }
`;
