const localData = require('./src/shared/utils/localdata/index')
const menuLinks = localData.menuLinks

module.exports = {
  siteMetadata: {
    title: `GlobalXSolutions`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@globalxsolutions`,
    technologyCards: [
      {
        icon: 'www.svg',
        title: 'Strony www',
      },
      {
        icon: 'km.svg',
        title: 'Kokpity menedżerskie',
      },
      {
        icon: 'phone.svg',
        title: 'Aplikacje mobilne (iOS i Android)',
      },
      {
        icon: 'ml.svg',
        title: 'Uczenie maszynowe',
      },
      {
        icon: 'man.svg',
        title: 'Usługi kognitywne',
      },
      {
        icon: 'switch.svg',
        title: 'Układy analogowe',
      },
      {
        icon: 'analog.svg',
        title: 'Układy cyfrowe',
      },
    ],
    menuLinks: menuLinks,
  },
  plugins: [
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/shared/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pkra10ekc99f`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'yyG2TdBVXKDodrFR0R6RVjNp37NajEPs2DNhTMBqIzY',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
