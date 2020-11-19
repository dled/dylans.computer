import React from 'react'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { focusOutline } from './shared-styles'
import { GitHub, Spotify, Twitch, Twitter } from './social-icons'

const Wrapper = styled.footer`
  text-align: center;
  position: relative;
  margin: ${({ theme }) => theme.spacing[8]} 0;
  .name {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.sans};
    line-height: ${({ theme }) => theme.lineHeight.none};
    margin: ${({ theme }) => theme.spacing[8]} 0;
  }
  hr {
    margin: ${({ theme }) => theme.spacing[10]} 0;
    opacity: 0.5;
    color: var(
      --colour-secondary,
      ${({ theme }) => theme.colors.gray[300]}
    );
  }
  svg {
    margin: 0 ${({ theme }) => theme.spacing[4]};
    height: ${({ theme }) => theme.spacing[6]};
    &:hover {
      transform: translateY(-2px);
      transition: transform 0.35s;
    }
  }
  a {
    display: inline-block;
    ${focusOutline}
  }
  .sign-off {
    margin-top: ${({ theme }) => theme.spacing[6]};
    margin-bottom: ${({ theme }) => theme.spacing[16]};
    ${down('sm')} {
      margin-bottom: ${({ theme }) => theme.spacing[24]};
    }
  }
`

export const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <p className="name">DYLAN LEDBETTER</p>
      <a
        href="https://twitter.com/_dylanledbetter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Account"
      >
        <Twitter />
      </a>
      <a
        href="https://github.com/dled"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Account"
      >
        <GitHub />
      </a>
      <a
        href="https://open.spotify.com/user/8x6690s3fggydwld0vka0ci5h"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify Account"
      >
        <Spotify />
      </a>
      <a
        href="https://twitch.tv/ledbetter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitch Account"
      >
        <Twitch />
      </a>
      <p className="sign-off">
        {`Built with Gatsby · Hosted on Netlify · ${new Date().getFullYear()}`}
      </p>
    </Wrapper>
  )
}
