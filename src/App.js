import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import DirectCV from './components/DirectCV';
import FormPreviewCV from './components/FormPreviewCV';
import Footer from './components/Footer';
import emptyCV from './components/Utils/emptyCV';
import { nanoid } from 'nanoid';

function App() {
	const [displayMode, setDisplayMode] = useState('direct');
	const [currentCVData, setCurrentCVData] = useState(emptyCV);

	const handlers = {
		changePersonal(e) {
			const { name, value } = e.target;
			setCurrentCVData((prevState) => ({
				...prevState,
				personal: {
					...prevState.personal,
					[name]: value,
				},
			}));
		},

		changeFile(e) {
			const { name } = e.target;
			const file = e.target.files[0];
			if (!file) {
				return;
			}
			const reader = new FileReader();
			reader.onload = () => {
				setCurrentCVData((prevState) => ({
					...prevState,
					personal: {
						...prevState.personal,
						[name]: reader.result,
					},
				}));
			};
			reader.readAsDataURL(file);
		},

		changeExperience(e, id) {
			const { name, value } = e.target;
			setCurrentCVData((prevState) => {
				const newState = prevState.experience.map((item) => {
					if (item.id === id) {
						return { ...item, [name]: value };
					}
					return item;
				});
				return { ...prevState, experience: [...newState] };
			});
		},

		addExperience(e) {
			e.preventDefault();
			setCurrentCVData((prevState) => ({
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

		removeExperience(e, id) {
			e.preventDefault();
			setCurrentCVData((prevState) => ({
				...prevState,
				experience: prevState.experience.filter(
					(item) => item.id !== id
				),
			}));
		},

		changeEducation(e, id) {
			const { name, value } = e.target;
			setCurrentCVData((prevState) => {
				const newState = prevState.education.map((item) => {
					if (item.id === id) {
						return { ...item, [name]: value };
					}
					return item;
				});
				return { ...prevState, education: [...newState] };
			});
		},

		addEducation(e) {
			e.preventDefault();
			setCurrentCVData((prevState) => ({
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

		removeEducation(e, id) {
			e.preventDefault();
			setCurrentCVData((prevState) => ({
				...prevState,
				education: prevState.education.filter((item) => item.id !== id),
			}));
		},
	};

	function changeDisplayMode(e) {
		setDisplayMode((prevState) => e.target.id);
	}

	function saveAllData(data) {
		localStorage.setItem('savedCVData', JSON.stringify(data));
	}

	function clearAllData() {
		localStorage.clear();
	}

	useEffect(() => {
		const localData = JSON.parse(localStorage.getItem('savedCVData'));
		if (localData) {
			setCurrentCVData((prevState) => localData);
		}
	}, []);

	return (
		<>
			<Header
				mode={displayMode}
				changeMode={changeDisplayMode}
				saveData={saveAllData}
				clearData={clearAllData}
			/>
			<div className='main'>
				{displayMode === 'direct' ? (
					<DirectCV data={currentCVData} {...handlers} />
				) : (
					<FormPreviewCV data={currentCVData} {...handlers} />
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
