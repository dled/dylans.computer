module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'LEDBETTER.FM', // Navigation and Site Title
  siteTitleAlt: 'Dylan Ledbetter',
  siteTitleShort: 'LEDBETTER.FM', // short_name for manifest
  siteUrl: 'http://ledbetter.fm', // Domain of your site. No trailing slash!
  siteLanguage: 'en-US', // Language Tag on <html> element
  siteLocale: 'en_us', // Language Tag on <html> element
  siteLogo: 'static/favicon.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: 'Finance + Math + Data + Maps',
  author: 'Dylan Ledbetter', // Author for schemaORGJSONLD
  organization: 'ledbetter.fm',
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
    'Data Science',
    'Machine Learning',
    'Maps',
    'Economics',
    'Dylan Ledbetter',
    'Crypto',
  ],
  minibio: `
    <strong>LEDBETTER.FM</strong> is one helluva website.
  `,
}
