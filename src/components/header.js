import React from 'react'
import styled from 'styled-components'
import { Link, linkStyle, rainbowAnimation } from './shared-styles'
import { ToggleTheme } from './toggle-theme'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: '#2a4365';
    font-weight: 900;
  }
  &:active {
    color: ${({ theme }) => theme.colors.red[500]};
  }
  ${linkStyle}
`

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  &:hover {
    .dot-com {
      display: contents;
    }
  }
  .site-title {
    font-family: 'Rubik', sans;
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    margin-top: ${({ theme }) => theme.spacing[1]};
    background: linear-gradient(
      var(
        --title-gradient-from,
        ${({ theme }) => theme.colors.title[100]}
      ),
      var(
        --title-gradient-to,
        ${({ theme }) => theme.colors.title[200]}
      )
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    .site-name {
      font-weight: 200;
    }
    .dot-com {
      display: 'hidden';
      font-weight: 700;
    }
  }
  p {
    margin-top: -${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    ${rainbowAnimation}
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 10px;
    background: none;
    border: none;
    img {
      width: 30px;
    }
    border-radius: ${({ theme }) => theme.borderRadius.full};
    outline: none;
  }
`

//const StyledNav = styled.nav`
//  display: flex;
//  align-items: center;
//  flex-direction: column;
//  margin-top: 1rem;
//  ul {
//    display: grid;
//    grid-auto-columns: auto;
//    grid-auto-flow: column;
//    grid-gap: 2.5rem;
//    padding-inline-start: 0;
//  }
//`

export const Header = ({ title, description }) => {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/" id="top-of-page">
          <p className="site-title">
            <span className="site-name">LEDBETTER</span>
            <span className="dot-com">.FM</span>
          </p>
        </StyledLink>
        <ToggleTheme />
      </StyledHeader>
    </>
  )
}
