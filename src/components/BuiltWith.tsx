import React, { ReactElement } from "react";
import { BaseContainer } from "./Containers";
import { MediumText, SmallText } from "./Typography";

import { CardanoLogo } from "./svg/vendors/CardanoLogo";
import { EthereumLogo } from "./svg/vendors/EthereumLogo";
import styled from "styled-components";

const BuiltWithContainer = styled(BaseContainer)`
  align-items: center;
  justify-content: flex-start;
  margin-top: 32px;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 8px 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BuiltWithText = styled(MediumText)`
  white-space: nowrap;
  text-align: left;
  width: min-content;
  font-size: 16px;
  font-weight: 400;
  margin-right: 16px;
`;

const BuiltWithSvg = styled.svg`
  max-height: 100%;
`;

export function BuiltWith(): ReactElement {
  return (
    <BuiltWithContainer>
      <BuiltWithText>powered by</BuiltWithText>
      <BuiltWithSvg
        as={CardanoLogo}
        style={{
          flex: 0.7,
        }}
      />

      <BuiltWithSvg
        as={EthereumLogo}
        style={{
          flex: 1,
        }}
      />
    </BuiltWithContainer>
  );
}
