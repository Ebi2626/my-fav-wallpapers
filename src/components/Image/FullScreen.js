import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FullScreenWrapper = styled.div`
position: fixed;
top: 0px;
left: 0px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: rgba(200,200,200, .9);
margin: 0 auto;
width: 100%;
height: 100%;
padding: 40px;
z-index: 20;
`;
const Image = styled.img`
position: relative;
margin: 0 auto;
width: 70%;
min-width: auto;
max-height: 90vh;
height: auto;
@media all and (max-width: 800px){
    width: 100%;
    height: auto;
}
`;
const ClosingCross = styled.div`
position: absolute;
font-size: 28px;
top: 20px;
right: 20px;
transition: transform .3s ease-in-out;
&:hover {
    cursor: pointer;
    transform: scale(1.3);
}
`
const FullScreen = (props) => {
    return (
        <FullScreenWrapper>
            <Image alt="test" src={props.src}>
            </Image>
            <ClosingCross onClick={() => props.closingFn()}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></ClosingCross>
        </FullScreenWrapper>

    )
}

export default FullScreen;