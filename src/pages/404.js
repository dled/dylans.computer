import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
//import { graphql, useStaticQuery } from "gatsby"
import Particles from "../@rafaelquintanilha/gatsby-theme-countdown/components/particles"
import MainHeader from "../@rafaelquintanilha/gatsby-theme-countdown/components/main-header";
import CountdownContainer from "../@rafaelquintanilha/gatsby-theme-countdown/components/countdown-container";
import SEO from "../@rafaelquintanilha/gatsby-theme-countdown/components/seo";

const FourOhThree = ({
  pageContext: {
    daysLabel,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    targetDate,
    hideSeconds,
    hideMinutes,
    hideHours,
    hideDays,
    hideParticles,
  }
}) => {
  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <SEO title={403} />
      <Header>
        <MainHeader text={403} />
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

export default FourOhThree