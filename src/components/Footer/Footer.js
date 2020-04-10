import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/globalContext';

const StyledFooter = styled.footer`
padding: 20px 10px;
margin-top: 20px;
text-align: center;
border-top: ${({color})=> (color ? `solid 2px ${color}` : "solid 2px #FF66FF")};
text-transform: uppercase;
color: ${({color})=> (color ? color : "#FF66FF")};
`;

const Footer = (props) => {
    const context = useContext(GlobalContext)
    return (<StyledFooter color={context.themeColor}>
        {props.children}
    </StyledFooter>);
}

export default Footer;