import React, {useState} from "react";
import styled from "styled-components";
import ImageCover from "./ImageCover";

const Img = styled.img`
  width: 100%;
  height: calc(((90vw - 20px)/3)/1.78);
  background-color: red;
  display: block;
  align-items: center;
  justify-self: center;
`;

const StyledImgWrapper = styled.div`
position: relative;
`;

const Image = (props) => {
  const [hovered, setHovered] = useState(false)
  return <StyledImgWrapper  onMouseEnter={() => { return setHovered(true) }} onMouseLeave={() => {  setHovered(false) }}><Img src={props.src} alt={props.src} /><ImageCover visible={hovered} author={props.author} authorPage={props.authorPage} openFullScreen={()=>props.openFullScreen()}></ImageCover></StyledImgWrapper>;
};



export default Image;
