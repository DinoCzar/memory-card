import React from 'react';
import GenerateImage from './GenerateImage';
function ImageGallery() {
	const termsArray = ['shark', 'king', 'butterfly', 'robot', 'puzzle', 'planet', 'dinosaur', 'sword', 'pyramids'];

	return (
		<div className='gallery'>
			{termsArray.map((term, index) => (
				<GenerateImage key={index} term={term} />
			))}
		</div>
	);
}

export default ImageGallery;
