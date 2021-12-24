import { css } from "styled-components";
import { theme } from "./theme";

export const flexSet = (
  justify = "center",
  align = "center",
  direction = "row"
) => css`
  display: flexbox;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

export const formSet = () => css`
  width: 540px;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`;

export const btnBlueSet = () => css`
  font-size: 0.9rem;
  font-weight: 700;
  height: 54px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(52, 93, 238);
  border: 1px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
`;

export const btnWhiteSet = () => css`
  font-size: 0.9rem;
  font-weight: 700;
  height: 54px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(52, 93, 238);
  background-color: rgb(255, 255, 255);
  color: rgb(52, 93, 238);
`;
