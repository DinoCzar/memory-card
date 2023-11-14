import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {

  const apiKey = '4KfkvfVeJogPMZp3DR2jB8sMaWw4o3rc';

function getImages(apiKey, searchTerm) {
    
    const apiURL =
        'https://api.giphy.com/v1/gifs/translate?api_key=' +
        apiKey + searchTerm;
    async function retreiveImages() {
        const response = await fetch(apiURL, { mode: 'cors' });
        const imagesArray = await response.json();
           }
   getImages().catch(function (err) {
        alert('An error occurred while fetching the data.');
    });
}

  return (
    <>
    </>
  )
}

export default App
