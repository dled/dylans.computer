import React from 'react'
import SEO from 'react-seo-component'
//import { down } from 'styled-breakpoints'
//import styled from 'styled-components'
import About from '../../content/copy/about'
//import { NavItems } from '../components/nav-items'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ogImageUrl } from '../util/build-og-image-url'

//const Wrapper = styled.section`
//  position: relative;
//  display: grid;
//  grid-auto-rows: min-content;
//  min-height: 90vh;
//  ${down('md')} {
//    min-height: 80vh;
//  }
//  div {
//    margin: 0 auto;
//    margin-top: 20%;
//    border-radius: ${({ theme }) => theme.borderRadius.full};
//    height: 200px;
//    width: 200px;
//    ${down('sm')} {
//      height: 150px;
//      width: 150px;
//    }
//  }
//  h1 {
//    text-align: center;
//    margin-top: 20%;
//    ${down('sm')} {
//      margin-top: 10%;
//    }
//    span {
//      &:before {
//        content: ' ';
//      }
//    }
//  }
//  nav {
//    position: relative;
//    bottom: 0;
//    margin: 0 -10rem;
//    margin-top: 25%;
//    display: grid;
//    grid-template-columns: repeat(4, 1fr);
//    grid-template-rows: auto;
//    grid-template-areas: 'about portfolio now uses';
//    ${down('md')} {
//      grid-template-columns: repeat(2, 1fr);
//      grid-template-areas:
//        'about portfolio'
//        'now uses';
//      margin: 0;
//      margin-top: 30%;
//    }
//    ${down('sm')} {
//      margin-top: 20%;
//    }
//    grid-gap: 30px;
//  }
//`

//const LandingPage = ({ children }) => {
//  return <Wrapper>{children}</Wrapper>
//}

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
        title={`Home`}
        titleTemplate={title}
        description={description}
        image={ogImageUrl(
          authorName,
          'LEDBETTER.FM',
          `Keepin' it on the DL`
        )}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <About />
    </>
  )
}
