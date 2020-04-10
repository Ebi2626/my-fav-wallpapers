import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../context/globalContext";

const StyledError = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  padding: 40px;
  font-size: 32px;
  left: 0px;
  text-align: center;
  justify-content: center;
  color: ${({ color }) => (color ? color : "#FF66FF")};
`;

const Error = (props) => {
  const context = useContext(GlobalContext);
  return <StyledError color={context.themeColor}>{props.children}</StyledError>;
};

export default Error;
