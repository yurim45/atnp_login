const size = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

const colors = {
  black: "#18214D",
  blue: "#345DEE",
  red: "#EE3465",
  gray: "#DFE4EA",
  deepGray: "#A3A6B8",
  lightGray: "#f7f7f7",
  white: "#ffffff",
  borderColor: "rgb(221, 221, 221)",
};

export const theme = {
  colors,
  // 반응형
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
