/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import GitHubLogo from '../assets/github-logo.svg';

const GithubLink = ({url}) => (
  <div css={css({
    position: 'absolute',
    top: "20px",
    right: ["5px", "20px"],
    fontSize: 1,
    "& > a": {
      fontSize: "0px",
    },
    "& svg": {
      width: [24, 30],
      height: [24, 30],
      variant: 'svg',
      marginRight: 2,
      "& :hover": {
        opacity: "0.5",
      }
    },
    "& span": {
      position: "absolute",
      display: "block",
      visibility: "visible",
      overflow: "hidden",
      width: "1px",
      height: "1px",
      margin: "-1px",
      border: 0,
      padding: 0,
      clipPath: "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)",
      whiteSpace: "nowrap",
    }
  })}>
    <a href={url}>
      <span>Go to repository</span>
      <GitHubLogo />
    </a>
  </div>
);

export default GithubLink;
