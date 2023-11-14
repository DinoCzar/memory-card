import React, { useState, useEffect } from 'react';

function generateImage() {
	const [catImage, setCatImage] = useState('');
	const apiKey = '4KfkvfVeJogPMZp3DR2jB8sMaWw4o3rc';
	const searchTerm = 'cats';
	const apiURL =
		'https://api.giphy.com/v1/gifs/translate?api_key=' +
		apiKey +
		'&s=' +
		searchTerm;

	useEffect(() => {
		async function getImage() {
			try {
				const response = await fetch(apiURL, { mode: 'cors' });

				if (!response.ok) {
					throw new Error('Failed to fetch cat image');
				}

				const catData = await response.json();
				setCatImage(catData.data.images.original.url);
			} catch (error) {
				console.error('Error fetching cat image:', error.message);
			}
		}

		getImage();
	}, []);

	return (
		<>
			<img src={catImage} alt='Cat' />
		</>
	);
}

export default generateImage;
