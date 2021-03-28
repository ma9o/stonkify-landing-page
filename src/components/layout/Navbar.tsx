import React, { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-use";
import styled from "styled-components";
import { shadows } from "../../constants/colors";
import { BaseContainer } from "../Containers";
import { LogoSvg } from "../svg/LogoSvg";
import { BaseText, BigText } from "../Typography";

const NavbarLink = styled(BaseText)`
  font-weight: 500;
  margin-right: 16px;
  font-size: 20px;
  margin-top: 6px;
`;

const NavbarContainer = styled(BaseContainer)`
  height: 80px;
  padding: 20px 32px;
  width: 100%;
  max-width: 1440px;

  background: white;
  border-radius: 0 0 16px 16px;

  ${shadows.default}
`;

const HalfContainer = styled(BaseContainer)`
  flex: 1;
  align-items: center;
`;

const LogoText = styled(BigText)`
  margin-top: 6px;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export function Navbar(): ReactElement {
  const [currentLocation, setCurrentLocation] = useState<string>();

  const loc = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && loc) setCurrentLocation(loc.pathname);
  }, [loc]);

  return (
    <NavbarContainer>
      <HalfContainer
        style={{
          justifyContent: "flex-start",
        }}
      >
        <LogoSvg style={{ height: "100%", marginRight: "8px" }} />
        <LogoText>Stonkify</LogoText>
      </HalfContainer>
      <HalfContainer
        style={{
          justifyContent: "flex-end",
        }}
      >
        <NavbarLink as="a" href={process.env.GATSBY_NOTION_URL} target="blank">
          About
        </NavbarLink>
        <NavbarLink as="a" href="https://github.com/stonkify" target="blank">
          GitHub
        </NavbarLink>
      </HalfContainer>
    </NavbarContainer>
  );
}
