import { css } from "styled-components";

export const flexSet = (
  justify = "center",
  align = "center",
  direction = "row"
) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

export const formSet = () => css`
  width: 540px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
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
  background-color: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
`;

export const btnWhiteSet = () => css`
  font-size: 0.9rem;
  font-weight: 700;
  height: 54px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
`;

export const btnGraySet = () => css`
  font-size: 0.9rem;
  font-weight: 700;
  height: 54px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.deepGray};
  background-color: ${({ theme }) => theme.colors.deepGray};
  color: ${({ theme }) => theme.colors.white};
`;

export const description = () => css`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.deepGray};
`;
