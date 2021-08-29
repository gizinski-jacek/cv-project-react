import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import DirectEdit from './components/DirectEdit';
import FormOverview from './components/FormOverview';
import Footer from './components/Footer';
import emptyCV from './components/Utils/emptyCV';
import { nanoid } from 'nanoid';

function App() {
	const localData = JSON.parse(localStorage.getItem('localData'));
	const [mode, setMode] = useState('directEditBtn');
	const [currentData, setCurrentData] = useState(
		localData ? localData : emptyCV
	);

	const dataHandlers = {
		changePersonal(e) {
			const { name, value } = e.target;
			setCurrentData((prevState) => ({
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
				setCurrentData((prevState) => ({
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
			setCurrentData((prevState) => {
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
			setCurrentData((prevState) => ({
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
			setCurrentData((prevState) => ({
				...prevState,
				experience: prevState.experience.filter(
					(item) => item.id !== id
				),
			}));
		},

		changeEducation(e, id) {
			const { name, value } = e.target;
			setCurrentData((prevState) => {
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
			setCurrentData((prevState) => ({
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
			setCurrentData((prevState) => ({
				...prevState,
				education: prevState.education.filter((item) => item.id !== id),
			}));
		},
	};

	const headerControls = {
		changeMode(e) {
			setMode(e.target.id);
		},

		saveData() {
			localStorage.setItem('localData', JSON.stringify(currentData));
		},

		wipeData() {
			if (
				window.confirm(
					'This will wipe all saved CV data. Are you sure?'
				)
			) {
				localStorage.clear();
				setCurrentData(emptyCV);
			}
		},
	};

	useEffect(() => {
		localStorage.setItem('localData', JSON.stringify(currentData));
	}, [currentData]);

	return (
		<>
			<Header mode={mode} {...headerControls} />
			<div className='main'>
				{mode === 'directEditBtn' ? (
					<DirectEdit
						data={currentData}
						dataHandlers={dataHandlers}
					/>
				) : (
					<FormOverview data={currentData} {...dataHandlers} />
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
