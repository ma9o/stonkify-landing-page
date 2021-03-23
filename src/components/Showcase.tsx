import styled from "styled-components";
import { shadows } from "../constants/colors";
import { BaseContainer } from "./Containers";
import { BigText, MediumText } from "./Typography";

export const DescriptionContainer = styled(BaseContainer)`
  flex-direction: column;
  flex: 0.7 0 200px;
  padding: 32px min(5vw, 64px);
  margin: 16px min(5vw, 64px);
`;

export const ShowcaseSvg = styled.svg`
  flex: 1 0 200px;
  padding: 0 min(5vw, 64px);
  margin: 32px;

  ${shadows.default}
`;

export const ShowcaseTitle = styled(BigText)`
  text-align: left;
  margin-bottom: 16px;
`;

export const ShowcaseDescription = styled(MediumText)`
  text-align: left;
`;

export const ShowcaseContainer = styled(BaseContainer)`
  flex-direction: column;
`;
