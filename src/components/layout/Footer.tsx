import React, { ReactElement } from "react";
import styled from "styled-components";
import { shadows } from "../../constants/colors";
import { ResponsiveContainer } from "../Containers";
import { MediumText } from "../Typography";

const FooterContainer = styled(ResponsiveContainer)`
  padding-top: 20px;
  padding-bottom: 16px;

  padding-left: 0px;
  padding-right: 0px;

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
  margin: 8px 12px;
  font-size: 20px;
`;

export function Footer(): ReactElement {
  return (
    <FooterContainer>
      <FooterText>
        <a href="mailto:contact@stonkify.io">contact@stonkify.io</a>
      </FooterText>
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
