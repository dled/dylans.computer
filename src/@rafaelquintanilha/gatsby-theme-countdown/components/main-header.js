import React from 'react';
import { Styled } from "theme-ui";

const MainHeader = ({ text }) => (
  <Styled.h1>
    {text}
  </Styled.h1>
);

export default MainHeader;