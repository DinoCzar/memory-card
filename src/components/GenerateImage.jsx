import React, { useState } from 'react';

function generateImage() {
	const [image, setImage] = useState('');
	const apiKey = '4KfkvfVeJogPMZp3DR2jB8sMaWw4o3rc';
	const searchTerm = 'cats';
	const apiURL =
		'https://api.giphy.com/v1/gifs/translate?api_key=' +
		apiKey +
		'&s=' +
		searchTerm;

	async function getImage() {
		try {
			const response = await fetch(apiURL, { mode: 'cors' });

			if (!response.ok) {
				throw new Error('Failed to fetch cat image');
			}

			const catData = await response.json();
			setImage(catData.data.images.original.url);
		} catch (error) {
			console.error('Error fetching cat image:', error.message);
		}
	}

	getImage();

	return (
		<>
			<img src={image} alt='Cat' />
		</>
	);
}

export default generateImage;
