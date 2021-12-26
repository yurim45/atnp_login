import React from "react";
import styled from "styled-components";
import { btnWhiteSet } from "../styles/variable";

const ButtonWhite = ({ label, onClick }) => {
  return <Btn onClick={onClick}>{label}</Btn>;
};

export default ButtonWhite;

const Btn = styled.button`
  ${btnWhiteSet}
`;
