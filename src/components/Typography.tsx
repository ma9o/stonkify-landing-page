import styled from "styled-components";
import { colors } from "../constants/colors";

export const BaseText = styled.p`
  font-style: normal;
  text-align: center;
  font-weight: normal;
  user-select: none;
  margin: 0;
  line-height: normal;
  white-space: normal;
`;

export const BigText = styled(BaseText)`
  font-weight: 600;
  font-size: min(7vw, 24px);
  color: ${colors.black.primary};
  line-height: 1;
`;

export const MediumText = styled(BaseText)`
  font-weight: 400;
  font-size: min(5vw, 24px);
  color: ${colors.black.secondary};
`;

export const SmallText = styled(BaseText)`
  font-weight: 400;
  font-size: min(3vw, 24px); ;
`;
