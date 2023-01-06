import React, { useState } from 'react';
import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';
import lightLogo from '../../assets/light-mode-moon.png'
import darkLogo from '../../assets/dark-mode-moon.png'
import { Link } from 'react-router-dom';

interface Props{
    darkMode:boolean;
}

const Header: React.FC<{darkMode : boolean; setDarkMode :  React.Dispatch<React.SetStateAction<boolean>>}> = (props) => {
  

  const toggleDarkMode = () => {
    props.setDarkMode(!props.darkMode)
  };

  return (
    <Headerr darkMode={props.darkMode}>
            <Link to={`/`}>
                <HOne darkMode={props.darkMode}>Where in the world?</HOne>
            </Link>
            
            <LogoAndModes>
                <Logo src={props.darkMode ? darkLogo : lightLogo} alt="logo" darkMode={props.darkMode} />
                
                <ToggleButton onClick={toggleDarkMode} darkMode={props.darkMode}>
                    {props.darkMode ? 'Dark mode' : 'Light mode'}
                </ToggleButton>
            </LogoAndModes>   
    </Headerr>
  );
};

export default Header;

const Headerr = styled.div<Props>`
    background: ${props => (props.darkMode ? '#2B3844' : 'white')};
    height: 80px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px 0px 16px;
    @media (min-width: 1024px) {
        padding: 0px 80px 0px 80px;
    }
    @media (min-width: 1440px) {
        padding: 0px 144px 0px 144px;
    }
`

const HOne = styled.h1<Props>`
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: ${props => (props.darkMode ? 'white' : '#2B3844')};
`

const LogoAndModes = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Logo = styled.img<Props>`
  
  width: 16px;
  height: 16px;
`;




const ToggleButton = styled.button<Props>`
    color: ${props => (props.darkMode ? 'white' : '#2B3844')};
    border: none;
    background: none;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    font-family: 'Nunito Sans';
`;



