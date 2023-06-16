import React, { useState } from 'react';

const SearchBar = ({ breeds, onSearch }) => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numberOfImages, setNumberOfImages] = useState(1);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumberOfImages(Number(event.target.value));
  };

  const handleButtonClick = () => {
    onSearch(selectedBreed, numberOfImages);
  };

  return (
    <div>
      <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">Select Breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        max="100"
        value={numberOfImages}
        onChange={handleNumberChange}
      />
      <button onClick={handleButtonClick}>Show Images</button>
    </div>
  );
};

export default SearchBar;
