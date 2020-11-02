import React from 'react'
import styled from 'styled-components'
import { useAnalytics } from '../contexts/event-tracking'

const NavLink = styled.a`
  grid-area: ${({ gridArea }) => gridArea};
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[100]};
  background: linear-gradient(
    180turn,
    var(
      --title-gradient-from,
      ${({ theme }) => theme.colors.primary[200]}
    ),
    var(
      --title-gradient-to,
      ${({ theme }) => theme.colors.primary[500]}
    )
  );
  outline: none;
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.outline};
    border-radius: 50px !important;
  }
  padding: 0.65rem 1rem;
  text-align: center;
  text-decoration: none;
  height: min-content;
`

export const NavItems = () => {
  const fa = useAnalytics()
  return (
    <nav aria-label={`page navigation`}>
      <NavLink
        gridArea={`blog`}
        href={`#blog`}
        onClick={() => fa('GTYLCPID')}
      >
        About
      </NavLink>
    </nav>
  )
}
