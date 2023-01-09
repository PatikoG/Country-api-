import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Header from './components/small-components/Header';
import SearchInput, { Option } from './components/small-components/SearchAndFilter';
import styled from 'styled-components';
import Home from './components/Home';
import { Country } from './types';



const App: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setData(response.data);
    }
    fetchData();
  }, []);

 
  
  const [darkMode, setDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchText, setSearchText] = useState('');
  

  return (
    <BackgroundChange darkMode={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SearchInput 
      selectedOption={selectedOption}  setSelectedOption={setSelectedOption} 
      darkMode={darkMode} 
      searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home data={data} darkMode={darkMode} selectedOption={selectedOption} searchText={searchText}/>}></Route>
        <Route path='/country/:country' element={<Info data={data} darkMode={darkMode}/>}></Route>
      </Routes>
    </BackgroundChange>
    
  );
};

export default App;

interface Props{
  darkMode:boolean;
}

const BackgroundChange = styled.div((props: Props) => `
    background-color: ${ props.darkMode ? '#202C36' : 'white'};
    color: ${props.darkMode ? 'white' : '#202C36'};
`);




