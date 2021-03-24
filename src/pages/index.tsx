import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { BrandsCarousel } from "../components/BrandsCarousel";
import { BuiltWith } from "../components/BuiltWith";
import { ResponsiveContainer } from "../components/Containers";
import { EmailInput } from "../components/EmailInput";
import { ForCreators } from "../components/ForCreators";
import { InvestorChart } from "../components/InvestorChart";
import {
  DescriptionContainer,
  ShowcaseContainer,
  ShowcaseDescription,
  ShowcaseSvg,
  ShowcaseTitle,
} from "../components/Showcase";
import { CollaborationSvg } from "../components/svg/art/CollaborationSvg";
import { InfluencerSvg } from "../components/svg/art/InfluencerSvg";
import { RichSvg } from "../components/svg/art/RichSvg";
import { SupportSvg } from "../components/svg/art/SupportSvg";

const MainTitle = styled(ShowcaseTitle)`
  font-size: min(8vw, 48px);
`;

const MainContainer = styled(ResponsiveContainer)`
  padding-top: min(20vw, 128px);
  padding-bottom: min(20vw, 128px);
`;

const MainDescriptionContainer = styled(DescriptionContainer)`
  padding: 0;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <MainContainer>
        <MainDescriptionContainer>
          <MainTitle>Invest in your favorite creators</MainTitle>
          <ShowcaseDescription>
            Earn returns on your donations. <br />
            No minimum amount required!
          </ShowcaseDescription>
          <EmailInput />
          <BuiltWith />
        </MainDescriptionContainer>
        <InvestorChart
          style={{
            marginTop: "32px",
          }}
          queryData={data}
        />
      </MainContainer>
      <BrandsCarousel />

      <ShowcaseContainer>
        <ResponsiveContainer
          style={{
            transform: "skewY(-11deg)",
            backgroundColor: "white",
          }}
        >
          <ShowcaseSvg
            as={SupportSvg}
            style={{
              transform: "skewY(11deg)",
            }}
          />
          <DescriptionContainer
            style={{
              transform: "skewY(11deg)",
              borderLeft: "1px solid lightgray",
            }}
          >
            <ShowcaseTitle>Discover talent early on</ShowcaseTitle>
            <ShowcaseDescription>
              Remember when "you were there" when that YouTube channel only had
              10K subscribers?
              <br />
              Stonkify lets you become part of the journey and rewards you for
              endorsing undiscovered talent.
            </ShowcaseDescription>
          </DescriptionContainer>
        </ResponsiveContainer>
        <ResponsiveContainer
          style={{
            flexWrap: "wrap-reverse",
          }}
        >
          <DescriptionContainer
            style={{
              borderLeft: "1px solid lightgray",
            }}
          >
            <ShowcaseTitle>Grow and earn together</ShowcaseTitle>
            <ShowcaseDescription>
              Stonkify helps promoting the content you endorse so that it can
              escape those impenetrable recommendation algorithms and more
              people can make your same choice.
            </ShowcaseDescription>
          </DescriptionContainer>
          <ShowcaseSvg as={CollaborationSvg} />
        </ResponsiveContainer>
      </ShowcaseContainer>

      <ForCreators />

      <ShowcaseContainer>
        <ResponsiveContainer
          style={{
            transform: "skewY(11deg)",
            backgroundColor: "white",
          }}
        >
          <ShowcaseSvg
            as={RichSvg}
            style={{
              transform: "skewY(-11deg)",
            }}
          />
          <DescriptionContainer
            style={{
              transform: "skewY(-11deg)",
              borderLeft: "1px solid lightgray",
            }}
          >
            <ShowcaseTitle>Kick-start your dream career</ShowcaseTitle>
            <ShowcaseDescription>
              With Stonkify it is extremely easy getting funded early on, so
              that you can acquire all the resources you need to really make
              your star shine.
            </ShowcaseDescription>
          </DescriptionContainer>
        </ResponsiveContainer>
        <ResponsiveContainer
          style={{
            flexWrap: "wrap-reverse",
          }}
        >
          <DescriptionContainer
            style={{
              borderLeft: "1px solid lightgray",
            }}
          >
            <ShowcaseTitle>Focus on what you do best</ShowcaseTitle>
            <ShowcaseDescription>
              Bonding curves, smart tokens, curation markets... they all sound
              scary but you won't need to touch any of that.
              <br />
              Just use your account how you're used to and we'll take care of
              the rest.
            </ShowcaseDescription>
          </DescriptionContainer>
          <ShowcaseSvg as={InfluencerSvg} />
        </ResponsiveContainer>
      </ShowcaseContainer>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allFile(filter: { relativePath: { ne: "creators" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(height: 28, width: 28)
          }
        }
      }
    }
  }
`;
