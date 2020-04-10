import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../context/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";


const StyledHeader = styled.h4`
  font-size: 32px;
  font-family: monospace;
  text-align: center;
  color: ${({color})=> (color ? `${color}` : '#ff66ff')};
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
  border-right:  ${({color})=> (color ? `solid 2px ${color}` : 'solid 2px #ff66ff')};
  color: #ff66ff;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (max-width: 800px){
    transform: ${({ active }) => active ? "translateX(0px)" : "translateX(-90vw)"};
    width: calc(90vw + 4px);
  }
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
  border-right: ${({color})=> (color ? `solid 4px ${color}` : 'solid 4px #ff66ff')};
  z-index: -1;
`;
const StyledSettingsWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  padding: 30px 20px;
  @media all and (max-width: 800px){
    width: 90%;
  }
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
  color: ${({ color }) => (color ? color : "#FF66FF")};
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 22px;
  margin-bottom: 20px;
  color: ${({color})=> (color ? color : "#FF66FF")};
`;
const StyledInput = styled.input`
  outline: none;
  width: 270px;
  padding: 5px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px
  ${({color})=> (color ? color : "#FF66FF")};
  color: ${({ color }) => (color ? color : "#FF66FF")};
  @media all and (max-width: 800px){
    width: 80%;
  }
`;
const StyledSelect = styled.select`
  outline: none;
  font-size: 18px;
  width: 270px;
  padding: 5px;
  background-color: transparent;
  border: none;
  border-bottom: ${({color})=> (color ? `solid 2px ${color}` : 'solid 2px #ff66ff')};
  color: ${({ color }) => (color ? `${color}` : '#ff66ff')};
  @media all and (max-width: 800px){
    width: 80%;
  }
`;
const StyledOption = styled.option`
  font-size: 18px;
  outline: none;
  background: black;
  color: ${({color})=> (color ? `${color}` : '#ff66ff')};
`;
const Button = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
border: ${({color})=> (color ? `solid 2px ${color}` : 'solid 2px #ff66ff')};
  background-color: transparent;
  text-transform: uppercase;
  margin: 10px auto;
  width: 100px;
  color: ${({color})=> (color ? `${color}` : '#ff66ff')};;
  top: 10px;
  position: relative;
`;

const Sidebar = () => {
  const context = useContext(GlobalContext)
  const [active, setActive] = useState(false);
  const [season, setSeason] = useState("summer");
  const [term, setTerm] = useState("landscape");
  const [color, setColor] = useState("#ff66ff");

  useEffect(() => {
    setColor(context.themeColor)
  }, [context])

  return (
        <StyledSidebar color={color} active={active}>
          <StyledSettingsWrapper>
            <StyledHeader color={color}>Settings</StyledHeader>
            <StyledLabel color={color}>
              Theme color:
              <StyledSelect value={color} color={color} onChange={(e) => setColor(e.target.value)}>
                <StyledOption color={color} value="#FF66FF">Purple</StyledOption>
                <StyledOption color={color} value="Red">Red</StyledOption>
                <StyledOption color={color} value="Blue">Blue</StyledOption>
                <StyledOption color={color} value="Green">Green</StyledOption>
                <StyledOption color={color} value="Yellow">Yellow</StyledOption>
              </StyledSelect>
            </StyledLabel>
            <StyledLabel color={color}>
              Season:
              <StyledSelect color={color} value={season} onChange={(e) => setSeason(e.target.value)}>
                <StyledOption color={color} value="winter">Winter</StyledOption>
                <StyledOption color={color} value="spring">Spring</StyledOption>
                <StyledOption color={color} value="summer">Summer</StyledOption>
                <StyledOption color={color} value="autumn">Autumn</StyledOption>
              </StyledSelect>
            </StyledLabel>
            <StyledLabel color={color}>
          Term:
              <StyledInput
            color={color}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              ></StyledInput>
            </StyledLabel>
            <Button color={color}
              onClick={(e) => {
                e.preventDefault();
                context.queryParamsHandler({season, term, color})
              }}
            >
              Save
            </Button>
          </StyledSettingsWrapper>
          <StyledToggler color={color} onClick={() => setActive(!active)}>
            <StyledIcon color={color}>
              <FontAwesomeIcon icon={faCog} />
            </StyledIcon>
          </StyledToggler>
        </StyledSidebar>
  );
};

export default Sidebar;
