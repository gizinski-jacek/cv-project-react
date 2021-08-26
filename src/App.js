import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import DirectCV from './components/DirectCV';
import FormPreviewCV from './components/FormPreviewCV';
import Footer from './components/Footer';
import emptyCV from './components/Utils/emptyCV';
import { nanoid } from 'nanoid';

function App() {
	const [mode, setMode] = useState('direct');
	const [currentData, setCurrentData] = useState(emptyCV);

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

	const headerHandlers = {
		changeMode(e) {
			setMode((prevState) => e.target.id);
		},

		saveData() {
			localStorage.setItem('localData', JSON.stringify(currentData));
		},

		clearData() {
			localStorage.clear();
		},
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('localData'));
		if (data) {
			setCurrentData((prevState) => data);
		}
	}, []);

	return (
		<>
			<Header mode={mode} {...headerHandlers} />
			<div className='main'>
				{mode === 'direct' ? (
					<DirectCV data={currentData} {...dataHandlers} />
				) : (
					<FormPreviewCV data={currentData} {...dataHandlers} />
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
