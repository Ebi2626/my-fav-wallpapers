import React from "react";
import styled from "styled-components";

const StyledSubtitle = styled.h4`
  text-align: center;
  color: white;
  font-size: 22px;
  margin-top: -10px;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const StyledWrapper = styled.div`
display: block;
width: 100%;
text-align: center;
margin: 0px auto;
`;

const Subtitle = ({ text }) => {
  return (
    <StyledWrapper>
        <StyledSubtitle>{text}</StyledSubtitle>
    </StyledWrapper>
  );
};


export default Subtitle;
