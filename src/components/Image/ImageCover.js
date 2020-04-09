import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// full={item.full}
// source={item.source}
// author={item.author}
// authorPage={item.authorPage}

const StyledCover = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
width: 100%;
height: 100%;
background-color: ${({ visible }) => visible ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.0)"};
transition: all .3s ease-in-out;
& > * {
    opacity: ${({ visible }) => visible ? 1 : 0};
}
`;
const StyledIcon = styled.div`
font-size: 32px;
text-align: center;
margin-bottom: 3vw;
padding: 4px;
border-radius: 50%;
background-color: transparent;
transition: all .3s ease-in-out;
&:hover {
    transform: scale(1.3);
    cursor: pointer;
}
`;
const StyledStrip = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
background: rgba(200,200,200,0.8);
justify-content: space-around;
align-items: center;
width: 100%;
font-size: 2vw;
&*{
    width: 40px;
    height: 40px;
    background: transparent;
    color: white;
    transition: all .3s ease-in-out;
}
& > *:hover {
    transform: scale(1.1);
    border-radius: 50%;
    background: white;
    cursor: pointer;
    color: black;
}
`;
const StyledAuthorToolTip = styled.div`
position: relative;
&:after {
    content: ${(props)=> props.author ? "\"" + props.author.toString() + "\"" : "Unknown"};
    position: absolute;
    display: none;
    font-size: 14px;
    bottom: 40px;
    left: -40px;
    padding: 10px 20px;
    background-color: white;
    width: 200px;
    color: black;
}
&:hover {
    &:after {
        display: block;
    }
}
`;

const ImageCover = (props) => {
    console.log(props.author)
    return (
        <StyledCover visible={props.visible}>
            <StyledIcon><FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon></StyledIcon>
            <StyledStrip><StyledAuthorToolTip author={props.author}><FontAwesomeIcon icon={faUser} /></StyledAuthorToolTip><FontAwesomeIcon icon={faArrowsAlt} style={{ transform: "rotate(45deg)" }} onClick={()=>props.openFullScreen()} /><FontAwesomeIcon icon={faGlobe} onClick={()=> window.open(props.authorPage)} /></StyledStrip>
        </StyledCover>

    )
}

export default ImageCover;