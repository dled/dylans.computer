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
    </>
  )
}
