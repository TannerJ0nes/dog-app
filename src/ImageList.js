import React, { useState, useEffect } from 'react';
import './styles.css';

const ImageList = ({ breed, numberOfImages }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${numberOfImages}`
        );
        const data = await response.json();
        if (data.status === 'success') {
          setImages(data.message);
        } else {
          setError('Failed to fetch images.');
        }
      } catch (error) {
        setError('An error occurred while fetching images.');
      }

      setIsLoading(false);
    };

    fetchImages();
  }, [breed, numberOfImages]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="image-container">
      {images.map((imageUrl) => (
        <div key={imageUrl} className="image-item">
          <img src={imageUrl} alt="Dog" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
