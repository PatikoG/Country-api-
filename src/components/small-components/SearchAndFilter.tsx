import React, { useState } from "react";
import styled from "styled-components";
import { Country } from "../../types";

export interface Option {
  value: string;
  label: string;
}

const SearchInput: React.FC<{
  darkMode: boolean;
  selectedOption: Option | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<Option | null>>;
  searchText : string;
  setSearchText : React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const options: Option[] = [
    { value: "All", label: "All" },
    { value: "North America", label: "North America" },
    { value: "South America", label: "South America" },
    { value: "Europe", label: "Europe" },
    { value: "Asia", label: "Asia" },
    { value: "Oceania", label: "Oceania" },
  ];

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setSearchText(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    props.setSelectedOption(selectedOption || null);
  };
  

  return (
    <SearchAndFil>
      <InputSe type="text" value={props.searchText} onChange={handleSearchTextChange}  />
      <Selecte value={props.selectedOption?.value} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Selecte>
    </SearchAndFil>
  );
};

export default SearchInput;

const SearchAndFil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 24px;
`

const InputSe = styled.input`
  width: 343px;
  height:48px;
  padding-left: 16px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`

const Selecte = styled.select`
  background: #FFFFFF;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  width: 200px;
  height: 48px;
  padding-left:16px;
`
