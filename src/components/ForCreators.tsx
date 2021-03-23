import React, { ReactElement } from "react";
import styled from "styled-components";
import { ResponsiveContainer } from "./Containers";
import { ShowcaseTitle } from "./Showcase";
import { MediumText } from "./Typography";

const ForCreatorsTitle = styled(ShowcaseTitle)`
  font-size: min(8vw, 48px);
`;

const ForCreatorsDescription = styled(MediumText)``;

const ForCreatorsContainer = styled(ResponsiveContainer)`
  z-index: 2;

  padding: 64px 32px;
  flex-direction: column;

  margin: 32px 0;
  width: 100%;

  background: white;
`;

export function ForCreators(): ReactElement {
  return (
    <ForCreatorsContainer>
      <ForCreatorsTitle>For creators</ForCreatorsTitle>
      <ForCreatorsDescription>
        Are you a creator? Stonkify exists first and foremost because of you.
        <br />
        Get in touch with us and we'll love to hear you out!
      </ForCreatorsDescription>
    </ForCreatorsContainer>
  );
}
