require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `PectusPlus-blog`,
    siteUrl: `https://pectusplus-blog.netlify.app/`,
    description: `PectusPlus Blog is a site for all things Pectus Excavatum related. Blog posts will dive deep on the review of published medical journals, stretching/mobility work, weightlifting routines, and breathing techniques. `,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
  ],
};
