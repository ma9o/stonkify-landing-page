import { css } from "styled-components";

export const colors = {
  primary: "#4f6fc9", //"#a0e09b",
  // secondary:   "#1FCE00",
  // tertiary: "#c0e4c2",
  black: {
    primary: "#192534",
    secondary: "#6b7c93",
    tertiary: "#f6f8fc",
  },
};

export const platformColor = {
  steam: "#0d1e4b",
  twitch: "#8c45f7",
  tiktok: "#270b1e",
  substack: "#f76418",
  youtube: "#f70000",
};

export const shadows = {
  default: css`
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.3));
  `,
};
