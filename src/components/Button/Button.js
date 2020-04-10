import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/globalContext';


const StyledButton = styled.button`
padding: 10px 30px;
border-radius: 5px;
border: ${({color})=> (color ? `solid 2px ${color}` : "solid 2px #FF66FF")};
background-color: transparent;
text-transform: uppercase;
color: ${({color})=> (color ? color : "#FF66FF")};
top: 10px;
right: 10px;
position: absolute;
`;

const Button = (props) => {
    const context = useContext(GlobalContext);
    return (
        <StyledButton color={context.themeColor}>
            {props.children}
        </StyledButton>
    )
}

export default Button;