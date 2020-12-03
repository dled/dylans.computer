module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'dylans.computer', // Navigation and Site Title
  siteTitleAlt: 'dylans.computer',
  siteTitleShort: "Dylan's PC", // short_name for manifest
  siteUrl: 'https://dylans.computer', // Domain of your site. No trailing slash!
  siteLanguage: 'en-US', // Language Tag on <html> element
  siteLocale: 'en_us', // Language Tag on <html> element
  siteLogo: 'static/favicon.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: "Dylan Ledbetter's computer",
  author: 'Dylan Ledbetter', // Author for schemaORGJSONLD
  organization: 'Dylan Ledbetter',
  lastBuildDate: new Date(Date.now()).toISOString(),
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  // Manifest and Progress color
  themeColor: `#336699`,
  backgroundColor: `#663399`,
  // Social component
  twitterUrl: 'https://twitter.com/_dylanledbetter/',
  userTwitter: '@_dylanledbetter',
  twitterHandle: '@_dylanledbetter',
  githubUrl: 'https://github.com/dled/',
  githubHandle: 'dled',
  keywords: [
    'Dylan Ledbetter',
    'Data Science',
    'Machine Learning',
    'Maps',
    'Economics',
    'Crypto',
  ],
  minibio: `
    Welcome to <strong>Dylan's computer</strong>.
  `,
}
