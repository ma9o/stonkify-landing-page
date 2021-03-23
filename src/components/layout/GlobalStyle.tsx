import { createGlobalStyle } from "styled-components";

function getFontUrl(font: string): string {
  return process.env.FONT_BASE_URL + "/fonts/" + font;
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-UltLt.ttf")}) format("truetype");
    font-weight: 100;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Th.ttf")}) format("truetype");
    font-weight: 200;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Lt.ttf")}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Roman.ttf")}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Md.ttf")}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Bd.ttf")}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Hv.ttf")}) format("truetype");
    font-weight: 800;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Blk.ttf")}) format("truetype");
    font-weight: 900;
  }

  body {
    font-family: "Helvetica Neue" !important;
    margin: 0;
  }

  * { 
    box-sizing: border-box; 
    min-width: 0; 
    min-height: 0; 

    &:focus {
      outline: none;
    }
  }

  a{
    text-decoration: none;
    color: inherit;

    &:hover, &:visited, &:active {
      color: inherit;
      text-decoration: none;
    }
  }
`;
