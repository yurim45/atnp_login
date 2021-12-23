import { css } from "styled-components";

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
