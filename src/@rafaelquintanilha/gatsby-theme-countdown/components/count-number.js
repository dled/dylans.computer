/** @jsx jsx */
import { jsx, css } from 'theme-ui';

const CountNumber = ({ value, label }) => (
  <div css={css({
    px: [2, 4, 5],
    py: [2, 2],
    my: [1, 2, 4],
    mx: [4, 0],
    borderRightWidth: [0, "1px"],
    borderRightStyle: [0, "solid"],
    borderBottomWidth: ["1px", 0],
    borderBottomStyle: ["solid", 0],
    borderColor: 'gray.0',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& > div:first-of-type": {
      fontSize: [7, 7, 8],
      fontWeight: 'bold',
      lineHeight: 1,
      fontFeatureSettings: '"tnum"'
    },
    "& > div:last-child": {
      fontSize: [0, 0, 1],
    }
  })}>
    <div>{value}</div>
    <div>{label}</div>
  </div>
);

export default CountNumber;
