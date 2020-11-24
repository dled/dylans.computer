import React, { useRef } from 'react'
import SEO from 'react-seo-component'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { SocialCard } from '../components/social-card'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'
import NowPlaying from '../../content/copy/spotify'
import { H1 } from '../components/page-elements'

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  div {
    margin: 0 auto;
    margin-top: 5%;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    height: 200px;
    width: 200px;
    ${down('sm')} {
      height: 150px;
      width: 150px;
    }
  }
  h1 {
    text-align: center;
    margin-top: 20%;
    ${down('sm')} {
      margin-top: 10%;
    }
    span {
      &:before {
        content: ' ';
      }
    }
  }
`

const LandingPage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default () => {
  const {
    title,
    description,
    siteUrl,
    twitterUsername,
    authorName,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata()
  return (
    <>
      <SEO
        title={`LEDBETTER`}
        titleTemplate={`FM`}
        description={description}
        image={ogImageUrl(authorName, 'ledbetter.fm', `social`)}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <LandingPage>
        <SocialCard />
        <H1>Now Playing</H1>
        <NowPlaying />
      </LandingPage>
    </>
  )
}
