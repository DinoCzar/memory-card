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

	const handleClick = () => {
		setClickCount((prevCount) => prevCount + 1);
	};

	return (
		<div className='container'>
			<div className='counter'>Score: {clickCount}</div>
			<div className='gallery'>
				{termsArray.map((term) => (
					<div key={termsArray.term} onClick={handleClick}>
						<p>{term}</p>
						<GenerateImage term={term} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ImageGallery;
