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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LEDBETTER.FM`,
        short_name: `LEDBETTER.FM`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        icons: [
          {
            src: `static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `static/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `static/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `static/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
