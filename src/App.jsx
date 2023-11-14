import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {

  function getImages() {

    const apiKey = '4KfkvfVeJogPMZp3DR2jB8sMaWw4o3rc';
    const searchTerm = 'cats';
    
    const apiURL =
        'https://api.giphy.com/v1/gifs/translate?api_key=' +
        apiKey + searchTerm;
    async function getImages() {
        const response = await fetch(apiURL, { mode: 'cors' });
        const imagesArray = await response.json();
           }
   getImages().catch(function (err) {
        alert('An error occurred while fetching the data.');
    });
}

getImages();

  return (
    <>
    <img src={imagesArray}></img>
    </>
  )
}

export default App
