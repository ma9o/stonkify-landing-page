require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Stonkify",
    siteUrl: "https://stonkify.io",
    description: "Invest in your favourite creators",
    url: "https://stonkify.io",
    image: "/images/logo.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout/Layout.tsx"),
      },
    },
    "gatsby-plugin-transition-link",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GOOGLE_TRACKING_ID],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
  ],
};
