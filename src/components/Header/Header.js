import React from "react";
import styled from "styled-components";
import NeonFont from "../../fonts/AUTOMANI.TTF";

const StyledHeader = styled.header`
    width: 100vw;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const StyledTitle = styled.h1`
@font-face {
  font-family: 'AUTOMANI';
  src: url(${NeonFont});
}
font-family: 'AUTOMANI';
      color: #FF66FF;
      font-size: 46px;
      text-align: center;
      text-shadow: 0 0 25px purple;
      letter-spacing: 2px;
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
};


export default Header;
