const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://ledbetter.fm`);
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
        bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
        region: process.env.AWS_REGION,
        protocol: targetAddress.protocol.slice(0, -1),
        hostname: targetAddress.hostname,
        acl: null,
        params: {
        },
      },
    },

  ],
}
