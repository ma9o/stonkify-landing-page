import React from "react";
import { PageContainer } from "../Containers";
import { Footer } from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./Navbar";
import { Seo } from "./Seo";

export function Layout(props) {
  const { children, pageContext } = props;

  return pageContext.disableLayout ? (
    children
  ) : (
    <PageContainer>
      <Navbar />
      <GlobalStyle />
      <Seo />
      {children}
      <Footer />
    </PageContainer>
  );
}

export default Layout;
