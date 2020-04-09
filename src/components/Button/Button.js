import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
padding: 10px 30px;
border-radius: 5px;
border: solid 2px #FF66FF;
background-color: transparent;
text-transform: uppercase;
color: #FF66FF;
top: 10px;
right: 10px;
position: absolute;
`;

const Button = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

export default Button;