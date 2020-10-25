import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
//import GithubLink from "../components/github-link";
//import ShareButtons from "../components/share-buttons";
//import Credits from "../components/credits";
import Particles from '../components/particles';
import MainHeader from "../components/main-header";
// import SecondaryHeader from "../components/secondary-header";
import CountdownContainer from "../components/countdown-container";
import SEO from "../components/seo";

const Layout = ({
  pageContext: {
    mainHeader,
    daysLabel,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    repoUrl,
    targetDate,
    hideGithubButton,
    hideSeconds,
    hideMinutes,
    hideHours,
    hideDays,
    hideWhatsappShareButton,
    hideTwitterShareButton,
    hideFacebookShareButton,
    hideParticles,
  }
}) => {
  const {
    site: {
      siteMetadata: {
        title,
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <SEO title={title} />
      <Header>
        <MainHeader text={mainHeader} />
      </Header>
      <Main>
        <Container>
          <CountdownContainer
            targetDate={targetDate}
            hideDays={hideDays}
            hideHours={hideHours}
            hideMinutes={hideMinutes}
            hideSeconds={hideSeconds}
            daysLabel={daysLabel}
            hoursLabel={hoursLabel}
            minutesLabel={minutesLabel}
            secondsLabel={secondsLabel}
          />
        </Container>
      </Main>
      {!hideParticles && <Particles />}
    </StyledLayout>
  )
}

export default Layout
