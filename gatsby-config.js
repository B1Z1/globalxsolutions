module.exports = {
  siteMetadata: {
    title: `GlobalXSolutions`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@illiamishkin`,
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
    menuLinks: [
      {
        name: 'Czym się zajmujemy',
        path: '/what-we-do',
      },
      {
        name: 'Technologie',
        path: '/technologies',
      },
      {
        name: 'Strategia i Kreacja',
        path: '/strategy-and-creation',
      },
      {
        name: 'Zespół',
        path: '/team',
      },
      {
        name: 'Produkty',
        path: '/products',
      },
      {
        name: 'Koncepcje',
        path: '/conceptions',
      },
      {
        name: 'Rozwiązania',
        path: '/solutions',
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
      },
      {
        name: 'Wydarzenia',
        path: '/events',
      },
      {
        name: 'Infotech',
        path: '/infotech',
      },
      {
        name: 'Kontakt',
        path: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/shared/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/Uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads', // Must match the source name ^
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
              markdownCaptions: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
