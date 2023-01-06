import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Country, Native, NativeNames } from '../types';



const Info: React.FC <{darkMode : boolean; data : Country[]}> = (props) => {
  const {country} = useParams();
  // console.log(country);

  
  const FilterData = props?.data?.find((item) => item.name.common === country);
  console.log(FilterData);
  let names : string[] = [];
  let nameNativenames : NativeNames = {common: '', official: ''}
  if (FilterData){
    names = Object.keys(FilterData?.name?.nativeName)
    const lastName = names[names.length - 1] as keyof Native;
    nameNativenames = FilterData?.name?.nativeName[lastName];
  }

  return (
    <div>
      <div>
        <img src={FilterData?.flags.png}/>
      </div>
      <div>
        <h3>{FilterData?.name.common}</h3>
        <div>
          <p>{nameNativenames?.common}</p>
          <p>{FilterData?.population}</p>
          <p>{FilterData?.region} </p>
          <p>{FilterData?.subregion} </p>
          <p>{FilterData?.capital} </p>
          <div>
            <p>{FilterData?.tld}</p>
            <p>{FilterData?.currencies?.XCD?.name} </p>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
