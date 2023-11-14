import React, { useState, useEffect } from 'react';
import GenerateImage from './GenerateImage';

function ImageGallery() {
	const initialTermsArray = [
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
	const [termsArray, setTermsArray] = useState(initialTermsArray);

	const handleClick = (term) => {
		// Update the total click count
		setClickCount((prevCount) => prevCount + 1);

		// Update the click count for the clicked term
		setTermClickCounts((prevClickCounts) => ({
			...prevClickCounts,
			[term]: (prevClickCounts[term] || 0) + 1,
		}));
	};

	const rearrangePictures = () => {
		// Shuffle the terms array randomly
		const shuffledTerms = [...termsArray].sort(() => Math.random() - 0.5);

		// Update the terms array state with the shuffled order
		setTermsArray(shuffledTerms);
	};

	useEffect(() => {
		// Check if the click count for any term is 2
		const termWithTwoClicks = Object.keys(termClickCounts).find(
			(term) => termClickCounts[term] === 2
		);

		if (termWithTwoClicks) {
			// Execute rearrangePictures if the click count for the term is 2
			rearrangePictures();
		}
	}, [termClickCounts]);

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
