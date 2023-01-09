import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Country, Native, NativeNames } from '../types';
import Arrow from '../assets/back-arrow.png'



const Info: React.FC <{darkMode : boolean; data : Country[]}> = (props) => {
  const {country} = useParams();
  

  
  const FilterData = props?.data?.find((item) => item.name.common === country);
  
  let names : string[] = [];
  let nameNativenames : NativeNames = {common: '', official: ''};
  let language : string = '';

  if (FilterData){
    language= Object.values(FilterData.languages)[0];
    names = Object.keys(FilterData?.name?.nativeName)
    const lastName = names[names.length - 1] as keyof Native;
    nameNativenames = FilterData?.name?.nativeName[lastName];
  }

  return (
    <div>

      <Link to='/'>
        <BackButton><ArrowImage src={Arrow}/> Back</BackButton>
      </Link>
    <Infos>
      <div>
        <FlagImg src={FilterData?.flags.png}/>
      </div>
      <LetterInfos>
        <CountryNamess>{FilterData?.name.common}</CountryNamess>
        <FlexedInfos>
          <NamesPopRegCap>
            <p>Native Name: {nameNativenames?.common}</p>
            <p>Population: {FilterData?.population}</p>
            <p>Region: {FilterData?.region} </p>
            <p>Sub Region: {FilterData?.subregion} </p>
            <p>Capital: {FilterData?.capital} </p>
          </NamesPopRegCap>
          <DomainCurrLang>
            <p>Top Level Domain: {FilterData?.tld}</p>
            <p>Currencies: {FilterData?.currencies?.XCD?.name} </p>
            <p>Languages: {language}</p>
          </DomainCurrLang>
        </FlexedInfos>
      </LetterInfos>
    </Infos>
    </div>
  )
}

export default Info;

const Infos = styled.div`
  padding: 0px 28px 0px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 64px;
  @media (min-width:1024px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 144px;
  }
`
const LetterInfos = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 110px;
  @media screen {
    margin-right: 0px;
  }
`

const FlagImg = styled.img`
  @media (min-width:1024px) {
    width: 560px;
    height: 401px;
  }
`

const FlexedInfos = styled.div`
  display: flex;
  gap: 117px;
`

const CountryNamess = styled.h3`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
`

const NamesPopRegCap = styled.div`
  margin-top: 16px;
  @media (min-width:1024px) {
    display: flex;
    flex-direction:column;
    gap: 12px;
  }

`

const DomainCurrLang = styled.div`
  margin-top: 32px;
  @media (min-width:1024px) {
    display: flex;
    flex-direction:column;
    gap: 12px;
    margin-top: 16px;
  }
`

const BackButton = styled.button`
  background: #FFFFFF;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 2px;
  width: 104px;
  height: 32px;
  border: none;
  margin-bottom: 64px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-right: 210px;
`

const ArrowImage = styled.img`
  width: 16px;
  height: 13px;
`



