const path = require('path')

module.exports = {
  siteMetadata: {
    title: `components-extra`,
    description: `React UI molecule components based on styled-components & material-ui.`,
    author: `Alexandre Le Lain <@a_lelain>`,
    url: "https://components-extra.netlify.com/",
    keywords: ["components-extra, react, components, molecules, blocks, ui, material design, cookies, navbar, footer"],
    image: "https://components-extra.netlify.com/public/logo.png",
    google: process.env.GOOGLE || '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "utils": path.resolve(__dirname, '../src/utils'),
          "hooks": path.resolve(__dirname, '../src/hooks'),
          "components": path.resolve(__dirname, '../src/components'),
          "theme": path.resolve(__dirname, '../src/theme')
        },
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        display: `minimal-ui`,
        name: `components-extra`,
        short_name: `components-extra`,
        start_url: `/`,
        background_color: `#404040`,
        theme_color: `#404040`,
        icon: `../public/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}