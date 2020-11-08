import React from 'react'
import styled from 'styled-components'

export const StyledSmall = styled.small`
  color: var(--colour-link, ${({ theme }) => theme.colors.teal[400]});
  font-size: ${({ theme }) => theme.fontSize.xs};
`

export const Small = props => {
  return <StyledSmall {...props}>{props.children}</StyledSmall>
}
