import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { shadows } from "../constants/colors";
import { creators } from "../constants/datasets";
import { BaseContainer } from "./Containers";
import { BaseText, MediumText } from "./Typography";

const CalculatorContainer = styled(BaseContainer)`
  flex-wrap: wrap;

  margin-top: 32px;
`;

const InteractiveTextContainer = styled(BaseContainer)`
  padding: 2px 8px;

  border-radius: 16px;
  background: white;

  ${shadows.default}
`;

const StaticText = styled(MediumText)`
  line-height: 1.25;

  margin: 0 8px;
  margin-top: 4px;
`;

const DisclaimerText = styled(BaseText)`
  font-size: 16px;
  color: #8c8a8a;
  margin-top: 8px;
`;

const InteractiveText = styled(MediumText)`
  margin-top: 2px;
`;

export function Calculator(props): ReactElement {
  const { currentLabel, queryData } = props;

  const creator = creators.find((val) => {
    return val.label === currentLabel;
  });

  const edge = queryData?.allFile?.edges?.find((edge) => {
    return edge.node.relativePath.includes(creator.image);
  });

  const image = getImage(edge.node);

  return (
    <CalculatorContainer>
      <StaticText>1000$ worth of</StaticText>
      <InteractiveTextContainer>
        <GatsbyImage
          image={image}
          alt="alt"
          style={{
            borderRadius: "50%",
            height: "28px",
            width: "28px",
          }}
        />
        <InteractiveText style={{ marginLeft: "8px" }}>
          {currentLabel}
        </InteractiveText>
      </InteractiveTextContainer>
      <StaticText>in</StaticText>
      <InteractiveTextContainer>
        <InteractiveText>{creator.start}</InteractiveText>
      </InteractiveTextContainer>
      <StaticText>could be now worth*</StaticText>
      <InteractiveTextContainer>
        <InteractiveText>{creator.result * 1000}$</InteractiveText>
      </InteractiveTextContainer>
      <DisclaimerText>
        *
        <a
          style={{
            textDecoration: "underline",
          }}
          href="https://github.com/stonkify/bonding-curve-simulator"
          target="blank"
        >
          simulated
        </a>{" "}
        buy-and-hold within ABM with random strategy over <br />
        logistic curve with 1:1 reserve ratio and 2% tax rate on purchase
      </DisclaimerText>
    </CalculatorContainer>
  );
}
