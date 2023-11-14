import React, { useState, useEffect } from 'react';

function generateImage() {
	const [catImage, setCatImage] = useState('');

	useEffect(() => {
		async function getCats() {
			try {
				const response = await fetch(
					'https://api.giphy.com/v1/gifs/translate?api_key=4KfkvfVeJogPMZp3DR2jB8sMaWw4o3rc&s=cats',
					{ mode: 'cors' }
				);

				if (!response.ok) {
					throw new Error('Failed to fetch cat image');
				}

				const catData = await response.json();
				setCatImage(catData.data.images.original.url);
			} catch (error) {
				console.error('Error fetching cat image:', error.message);
			}
		}

		getCats();
	}, []);

	return (
		<>
			<img src={catImage} alt='Cat' />
		</>
	);
}

export default generateImage;
