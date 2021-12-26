import React from "react";
import styled from "styled-components";
import { btnGraySet } from "../../styles/variable";

const ButtonGray = ({ label, onClick }) => {
  return <Btn onClick={onClick}>{label}</Btn>;
};

export default ButtonGray;

const Btn = styled.button`
  ${btnGraySet};
`;
