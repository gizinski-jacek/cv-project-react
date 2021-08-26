import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import DirectCV from './components/DirectCV';
import FormPreviewCV from './components/FormPreviewCV';
import Footer from './components/Footer';
import emptyCV from './components/Utils/emptyCV';
import { nanoid } from 'nanoid';

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
			<div className='main'>
				{inputMode === 'direct' ? (
					<DirectCV
						savedCVData={savedCVData}
						requestSave={requestSave}
						saveDataToLS={saveDataToLS}
					/>
				) : (
					<FormPreviewCV
						savedCVData={savedCVData}
						requestSave={requestSave}
						saveDataToLS={saveDataToLS}
					/>
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
