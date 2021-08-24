import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import emptyCV from './components/CVcomponents/emptyCV';

function App() {
	const [inputMode, setInputMode] = useState('direct');
	const [savedData, setSavedData] = useState(emptyCV);

	function changeInputMode(e) {
		setInputMode((prevState) => e.target.id);
	}

	function saveDataToLS() {
		console.log(1);
	}

	function clearAllData() {
		localStorage.clear();
	}

	useEffect(() => {
		let localCVData = localStorage.getItem('savedData');
		if (localCVData) {
			setSavedData((prevState) => localCVData);
		}
	}, []);

	return (
		<>
			<Header
				inputMode={inputMode}
				changeInputMode={changeInputMode}
				saveData={saveDataToLS}
				clearData={clearAllData}
			/>
			<Main inputMode={inputMode} savedData={savedData} />
			<Footer />
		</>
	);
}

export default App;
