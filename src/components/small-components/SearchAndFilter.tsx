import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' }
  ];

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(option => option.value === selectedValue);
    setSelectedOption(selectedOption || null);
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
      <select value={selectedOption?.value} onChange={handleOptionChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchInput;
