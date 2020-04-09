import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalContext from "../../context/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.h4`
  font-size: 32px;
  font-family: monospace;
  text-align: center;
  margin: 20px auto;
`;

const StyledSidebar = styled.aside`
  width: 404px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  transform: ${({ active }) =>
    active ? "translateX(0px)" : "translateX(-400px)"};
  background-color: black;
  border-right: solid 4px purple;
  color: purple;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledToggler = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  right: -50px;
  width: 100px;
  height: 100px;
  transform: translateY(-50%);
  background-color: black;
  border-radius: 50%;
  border-right: solid 4px purple;
  z-index: -1;
`;
const StyledSettingsWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  padding: 30px 20px;
`;

const StyledIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 4px;
  font-size: 32px;
  color: ${({ color }) => (color ? color : "yellow")};
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 22px;
  margin-bottom: 20px;
`;
const StyledInput = styled.input`
  outline: none;
  width: 270px;
  padding: 5px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px
    ${({ themeColor }) => (themeColor ? themeColor : "purple")};
  color: ${({ themeColor }) => (themeColor ? themeColor : "purple")};
`;
const StyledSelect = styled.select`
  outline: none;
  font-size: 18px;
  width: 270px;
  padding: 5px;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px
    ${({ themeColor }) => (themeColor ? themeColor : "purple")};
  color: ${({ themeColor }) => (themeColor ? themeColor : "purple")};
`;
const StyledOption = styled.option`
  font-size: 18px;
  outline: none;
  background: black;
  color: ${({ themeColor }) => (themeColor ? themeColor : "purple")};
`;
const Button = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  border: solid 2px #ff66ff;
  background-color: transparent;
  text-transform: uppercase;
  margin: 10px auto;
  width: 100px;
  color: #ff66ff;
  top: 10px;
  position: relative;
`;

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [season, setSeason] = useState("summer");
  const [term, setTerm] = useState("landscape");
  const [color, setColor] = useState("purple");
  // themeColor: "purple",
  // privateWall: [{}],
  // queryParams: {
  //     season: getSeason(),
  //     time: getTime(),
  //     term: "landscape"
  // },
  // queryParamsHandler,
  // privateWallAdd,
  // privateWallRemove
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <StyledSidebar active={active}>
          <StyledSettingsWrapper>
            <StyledHeader>Settings</StyledHeader>
            <StyledLabel>
              Theme color:
              <StyledSelect onChange={(e) => setColor(e.target.value)}>
                <StyledOption value="Red">Red</StyledOption>
                <StyledOption value="Blue">Blue</StyledOption>
                <StyledOption value="Green">Green</StyledOption>
                <StyledOption value="Yellow">Yellow</StyledOption>
              </StyledSelect>
            </StyledLabel>
            <StyledLabel>
              Season:
              <StyledSelect onChange={(e) => setSeason(e.target.value)}>
                <StyledOption value="winter">Winter</StyledOption>
                <StyledOption value="spring">Spring</StyledOption>
                <StyledOption value="summer">Summer</StyledOption>
                <StyledOption value="autumn">Autumn</StyledOption>
              </StyledSelect>
            </StyledLabel>
            <StyledLabel>
              Term:
              <StyledInput
                onChange={(e) => setTerm(e.target.value)}
              ></StyledInput>
            </StyledLabel>
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log(season);
                console.log(term);
                console.log(color);
              }}
            >
              Save
            </Button>
          </StyledSettingsWrapper>
          <StyledToggler onClick={() => setActive(!active)}>
            <StyledIcon color={context.themeColor}>
              {console.log(context.themeColor)}
              <FontAwesomeIcon icon={faCog} />
            </StyledIcon>
          </StyledToggler>
        </StyledSidebar>
      )}
    </GlobalContext.Consumer>
  );
};

export default Sidebar;
