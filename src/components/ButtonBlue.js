import React from "react";
import styled from "styled-components";
import { btnBlueSet } from "../styles/variable";

const ButtonBlue = ({ label, onClick }) => {
  return <Btn onClick={onClick}>{label}</Btn>;
};

export default ButtonBlue;

const Btn = styled.button`
  ${btnBlueSet};
`;
