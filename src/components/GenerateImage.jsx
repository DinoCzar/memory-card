import React, { useState } from 'react';

function generateImage({term}) {

    const searchTerms = {
        term: term
    }

	const [imageURL, setImageURL] = useState('');
	const apiKey = '4KfkvfVeJogPMZp3DR2jB8sMaWw4o3rc';
	const apiURL =
		'https://api.giphy.com/v1/gifs/translate?api_key=' +
		apiKey +
		'&s=' +
		searchTerms.term;

	async function getImage() {
		try {
			const response = await fetch(apiURL, { mode: 'cors' });

			if (!response.ok) {
				throw new Error('Failed to fetch image');
			}

			const newImage = await response.json();
			setImageURL(newImage.data.images.original.url);
		} catch (error) {
			console.error('Error fetching image:', error.message);
		}
	}

	getImage();

	return (
		<>
			<img src={imageURL} alt='Image' />
		</>
	);
}

export default generateImage;
