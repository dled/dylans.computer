import { format } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const StyledDate = styled.span`
  ${({ small, theme }) => small && `font-size: ${theme.fontSize.xs}`}
`

export const DateUpdated = ({ date, small }) => {
  const { lastBuildDate } = useSiteMetadata()
  const buildDate = date
    ? format(new Date(date), 'MMMM do yyyy')
    : format(new Date(lastBuildDate), 'MMMM do yyyy')
  return <StyledDate small={small}>{buildDate}</StyledDate>
}
