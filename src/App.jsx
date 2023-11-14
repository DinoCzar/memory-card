import React, { useState, useEffect } from 'react';
import GenerateImage from './components/GenerateImage.jsx';
import './styles/App.css';

function App() {
	return (
		<>
			<GenerateImage term='shark' />
			<GenerateImage />
			<GenerateImage />
			<GenerateImage />
			<GenerateImage />
		</>
	);
}

export default App;
