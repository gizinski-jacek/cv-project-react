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

	const [allCVData, setAllCVData] = useState(savedCVData);

	const handlers = {
		handlePersonalChange(e) {
			const { name, value } = e.target;
			setAllCVData((prevState) => ({
				...prevState,
				personal: {
					...prevState.personal,
					[name]: value,
				},
			}));
		},

		handleFileChange(e) {
			const { name } = e.target;
			const file = e.target.files[0];
			if (!file) {
				return;
			}
			const reader = new FileReader();
			reader.onload = () => {
				setAllCVData((prevState) => ({
					...prevState,
					personal: {
						...prevState.personal,
						[name]: reader.result,
					},
				}));
			};
			reader.readAsDataURL(file);
		},

		handleExperienceChange(e, id) {
			const { name, value } = e.target;
			setAllCVData((prevState) => {
				const newState = prevState.experience.map((item) => {
					if (item.id === id) {
						return { ...item, [name]: value };
					}
					return item;
				});
				return { ...prevState, experience: [...newState] };
			});
		},

		handleAddExperience(e) {
			e.preventDefault();
			setAllCVData((prevState) => ({
				...prevState,
				experience: [
					...prevState.experience,
					{
						id: nanoid(),
						company: '',
						position: '',
						city: '',
						workStart: '',
						workEnd: '',
					},
				],
			}));
		},

		handleRemoveExperience(e, id) {
			e.preventDefault();
			setAllCVData((prevState) => ({
				...prevState,
				experience: prevState.experience.filter(
					(item) => item.id !== id
				),
			}));
		},

		handleEducationChange(e, id) {
			const { name, value } = e.target;
			setAllCVData((prevState) => {
				const newState = prevState.education.map((item) => {
					if (item.id === id) {
						return { ...item, [name]: value };
					}
					return item;
				});
				return { ...prevState, education: [...newState] };
			});
		},

		handleAddEducati(e) {
			e.preventDefault();
			setAllCVData((prevState) => ({
				...prevState,
				education: [
					...prevState.education,
					{
						id: nanoid(),
						university: '',
						uniCity: '',
						degree: '',
						subject: '',
						uniStart: '',
						uniEnd: '',
					},
				],
			}));
		},

		handleRemoveEducation(e, id) {
			e.preventDefault();
			setAllCVData((prevState) => ({
				...prevState,
				education: prevState.education.filter((item) => item.id !== id),
			}));
		},
	};

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
						test={handlers}
					/>
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
