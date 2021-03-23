import React, { ReactElement } from "react";
import styled from "styled-components";
import { shadows } from "../../constants/colors";
import { ResponsiveContainer } from "../Containers";
import { MediumText } from "../Typography";

const FooterContainer = styled(ResponsiveContainer)`
  padding-top: 20px;
  padding-bottom: 16px;
  background-color: white;
  justify-content: space-evenly;
  flex-wrap: wrap;

  ${shadows.default}
  border-radius: 16px 16px 0 0;

  width: 100%;
  max-width: 1440px;

  margin-top: 128px;
`;

const FooterText = styled(MediumText)`
  margin: 4px 12px;
`;

export function Footer(): ReactElement {
  return (
    <FooterContainer>
      <FooterText>
        <a href="/privacy" target="blank">
          Privacy policy
        </a>
      </FooterText>
      <FooterText>
        <a href="/terms" target="blank">
          Terms of service
        </a>
      </FooterText>
      <FooterText>Stonkify © 2021 All Rights Reserved</FooterText>
    </FooterContainer>
  );
}
