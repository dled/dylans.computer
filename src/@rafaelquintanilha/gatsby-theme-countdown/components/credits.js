/** @jsx jsx */
import { jsx, css } from 'theme-ui';

const Credits = () => (
  <div css={css({
    alignSelf: "center",
    fontSize: 0,
    "& > a": {
      fontWeight: 'bold',
      textDecoration: "none",
      color: 'primary',
    }
  })}>
      Theme by <a href="https://rafaelquintanilha.com">Rafael Quintanilha</a>
  </div>
);

export default Credits;