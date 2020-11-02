const objectToQueryParams = obj => {
  const params = Object.entries(obj).map(
    ([key, value]) => `${key}=${value}`
  )
  return '?' + params.join('&')
}

export const ogImageUrl = (author, website, title) => {
  const params = {
    author,
    website: website || `ledbetter.fm`,
    title,
    image: `https://ledbetter.fm/favicon.png`,
  }
  return `https://image-og.now.sh/og.jpg${objectToQueryParams(
    params
  )}`
}
