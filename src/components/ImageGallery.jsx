import React, { useState } from 'react';
import GenerateImage from './GenerateImage';

function ImageGallery() {
  const termsArray = [
    'Shark',
    'King',
    'Butterfly',
    'Robot',
    'Puzzle',
    'Planet',
    'Dinosaur',
    'Sword',
    'Pyramids',
  ];

  const [clickCount, setClickCount] = useState(0);
  const [termClickCounts, setTermClickCounts] = useState({});

  const handleClick = (term) => {
    // Update the total click count
    setClickCount((prevCount) => prevCount + 1);

    // Update the click count for the clicked term
    setTermClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [term]: (prevClickCounts[term] || 0) + 1,
    }));
  };

  return (
    <div className='container'>
      <div className='counter'>Score: {clickCount}</div>
      <div className='gallery'>
        {termsArray.map((term) => (
          <div key={term} onClick={() => handleClick(term)}>
            <p>{term}</p>
            <GenerateImage term={term} />
            <div>Click Count: {termClickCounts[term] || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;

