import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numberOfImages, setNumberOfImages] = useState(1);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedsList = Object.keys(data.message);
        setBreeds(breedsList);
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleSearch = (breed, number) => {
    setSelectedBreed(breed);
    setNumberOfImages(number);
  };

  return (
    <div>
      <SearchBar
        breeds={breeds}
        onSearch={handleSearch}
      />
      {selectedBreed && (
        <ImageList
          breed={selectedBreed}
          numberOfImages={numberOfImages}
        />
      )}
    </div>
  );
};

export default App;
