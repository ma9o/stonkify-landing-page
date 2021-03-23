import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { BaseContainer, ResponsiveContainer } from "./Containers";
import { ItchLogo } from "./svg/vendors/ItchLogo";
import { SubstackLogo } from "./svg/vendors/SubstackLogo";
import { TiktokLogo } from "./svg/vendors/TiktokLogo";
import { PatreonLogo } from "./svg/vendors/PatreonLogo";
import { SteamLogo } from "./svg/vendors/SteamLogo";
import { TwitchLogo } from "./svg/vendors/TwitchLogo";
import { YoutubeLogo } from "./svg/vendors/YoutubeLogo";
import { For } from "react-loops";
import { shadows } from "../constants/colors";

const N_REPEAT = 3;

const slideshow = keyframes`
  100% { 
    transform: translateX(-${100 / N_REPEAT}%);  
  }
`;

const BrandsCarouselSlideshowContainer = styled(ResponsiveContainer)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  height: 32px;
  width: 100%;
  max-width: 1440px;
  min-width: 1440px;
`;

const BrandsCarouselSlideshow = styled(BaseContainer)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);
  animation: ${slideshow} 15s linear infinite;

  width: ${100 * N_REPEAT}%;
  justify-content: space-between;
`;

const BrandsCarouselContainer = styled(ResponsiveContainer)`
  background-color: white;
  padding: 16px 0;

  z-index: 1;

  border-radius: 16px;

  ${shadows.default}
`;

export function BrandsCarousel(): ReactElement {
  return (
    <BrandsCarouselContainer>
      <BrandsCarouselSlideshowContainer>
        <BrandsCarouselSlideshow>
          <For
            of={Array.from(Array(N_REPEAT))}
            as={(item) => {
              return (
                <>
                  <ItchLogo />
                  <PatreonLogo />
                  <SteamLogo />
                  <SubstackLogo />
                  <TiktokLogo />
                  <TwitchLogo />
                  <YoutubeLogo />
                </>
              );
            }}
          />
        </BrandsCarouselSlideshow>
      </BrandsCarouselSlideshowContainer>
    </BrandsCarouselContainer>
  );
}
