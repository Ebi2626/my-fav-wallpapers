import React, {useContext} from "react";
import styled from "styled-components";
import NeonFont from "../../fonts/AUTOMANI.TTF";
import GlobalContext from '../../context/globalContext';

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
      color: ${({color})=> (color ? color : "#FF66FF")};
      font-size: 46px;
      text-align: center;
      text-shadow: 0 0 25px ${({color})=> (color ? color : "#FF66FF")};
      letter-spacing: 2px;
`;

const Header = ({ title }) => {
  const context = useContext(GlobalContext);
  return (
    <StyledHeader>
      <StyledTitle color={context.themeColor}>{title}</StyledTitle>
    </StyledHeader>
  );
};


export default Header;
