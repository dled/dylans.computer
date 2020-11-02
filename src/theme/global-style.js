import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { CustomScroll } from '../components/shared-styles'
import { themeVariables } from './theme-variables'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${themeVariables}
  ${CustomScroll}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 16px;
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
  body {
    min-height: 100%;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background: var(
      --colour-background,
      ${({ theme }) => theme.colors.gray[100]}
    );
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colors.gray[900]}
    );
    -webkit-font-smoothing: antialiased;
  }
  [class$="mdx-embed"] {
    margin-top: ${({ theme }) => theme.spacing[6]};
  }
`
