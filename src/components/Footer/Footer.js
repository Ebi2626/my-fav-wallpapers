import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
padding: 20px 10px;
margin-top: 20px;
text-align: center;
border-top: solid 2px #FF66FF;
text-transform: uppercase;
color: #FF66FF;
`;

const Footer = (props) => (<StyledFooter>
    {props.children}
</StyledFooter>);

export default Footer;