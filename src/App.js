import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import emptyCV from './components/CVcomponents/emptyCV';

function App() {
	const [inputMode, setInputMode] = useState('direct');
	const [savedCVData, setSavedCVData] = useState(emptyCV);
	const [requestSave, setRequestSave] = useState(false);

	useEffect(() => {
		const localCVData = JSON.parse(localStorage.getItem('savedCVData'));

		if (localCVData) {
			setSavedCVData((prevState) => localCVData);
		}
	}, []);

	function changeInputMode(e) {
		setInputMode((prevState) => e.target.id);
	}

	function requestSaveToLS() {
		setRequestSave((prevState) => true);
	}

	function saveDataToLS(data) {
		setRequestSave((prevState) => false);
		localStorage.setItem('savedCVData', JSON.stringify(data));
	}

	function clearAllData() {
		localStorage.clear();
	}

	return (
		<>
			<Header
				inputMode={inputMode}
				changeInputMode={changeInputMode}
				requestSave={requestSaveToLS}
				clearData={clearAllData}
			/>
			<Main
				inputMode={inputMode}
				savedData={savedCVData}
				requestSave={requestSave}
				saveDataToLS={saveDataToLS}
			/>
			<Footer />
		</>
	);
}

export default App;
