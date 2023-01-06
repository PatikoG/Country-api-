import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Country } from '../types';


interface Props{
  darkMode:boolean;
};


const Home: React.FC<{darkMode : boolean; data : Country[]}> = (props) => {

  return (
    <Main>
      
      
      {props.data.map((country : Country) => (
        <Cards darkMode={props.darkMode} key={country.name.common}>
          <Link to={`/country/${country.name.common}`}>
            <Flags src={country.flags.png}/>
          </Link>
          <CardInfos>
            <CountryName darkMode={props.darkMode}>{country.name.common}</CountryName>
            <CountryInfos darkMode={props.darkMode}>population:<CountryInfosSpan darkMode={props.darkMode}>{country.population}</CountryInfosSpan></CountryInfos>
            <CountryInfos darkMode={props.darkMode}>Region:<CountryInfosSpan darkMode={props.darkMode}>{country.region}</CountryInfosSpan></CountryInfos>
            <CountryInfos darkMode={props.darkMode}>Capital:<CountryInfosSpan darkMode={props.darkMode}>{country.capital}</CountryInfosSpan></CountryInfos>
          </CardInfos>
        </Cards>
      ))}

    </Main>
  ) 
}

export default Home;

const Main = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
  gap:40px ;
  grid-template-columns: repeat(1, 264px);
  @media (min-width:768px) {
    grid-template-columns: repeat(3, 264px);
  }
  @media (min-width:1440px) {
    grid-template-columns: repeat(4, 264px);
    row-gap:70px;
    column-gap: 75px;
  }
  
`

const Cards = styled.div<Props>`
  width: 264px;
  height: 336px;
  background:${props => (props.darkMode ? '#2B3844' : 'white')};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  
`

const Flags = styled.img`
  width: 264px;
  height: 160px;
`

const CardInfos = styled.div`
  padding:24px 0px 0px 24px;
  font-family: 'Nunito Sans';
  display: flex;
  flex-direction: column;
  gap:8px ;
`

const CountryName = styled.h3<Props>`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  color:${props => (props.darkMode ? 'white' : '#2B3844')};
`

const CountryInfos = styled.p<Props>`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color:${props => (props.darkMode ? 'white' : '#2B3844')};
`

const CountryInfosSpan = styled.span<Props>`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color:${props => (props.darkMode ? 'white' : '#2B3844')};
  opacity: 0.8;
`