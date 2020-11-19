import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { H1 } from './page-elements'

export const SocialCard = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        loading="eager"
        alt="dylan social card"
      />
      <H1>Welcome to my new home on the internet.</H1>
      <H1>Nothing to see here, but come back soon!</H1>
      <H1>Happy Thanksgiving!</H1>
    </>
  )
}
