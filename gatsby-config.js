module.exports = {
  siteMetadata: {
    title: `LEDBETTER.FM`,
    url: `https://ledbetter.fm`,
    author: `Dylan Ledbetter`,
  },
  plugins: [
    {
      resolve: `@rafaelquintanilha/gatsby-theme-countdown`,
      options: {
        mainHeader: "LEDBETTER.FM",
        basePath: `/`,
        targetDate: `2020-11-01 00:00:00`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `ledbetter-fm`,
      },
    },

  ],
}
