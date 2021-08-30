import { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import DirectEdit from './components/DirectEdit';
import FormOverview from './components/FormOverview';
import Footer from './components/Footer';
import emptyCV from './components/Utils/emptyCV';
import { nanoid } from 'nanoid';
import { useReactToPrint } from 'react-to-print';

function App() {
	const localData = JSON.parse(localStorage.getItem('localData'));
	const [formMode, setFormMode] = useState(true);
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

	const componentRef = useRef();

	const printCV = useReactToPrint({ content: () => componentRef.current });

	const headerControls = {
		changeMode(e) {
			e.target.id === 'formOverviewBtn'
				? setFormMode(true)
				: setFormMode(false);
		},

		saveCV() {
			localStorage.setItem('localData', JSON.stringify(currentData));
		},

		resetCV() {
			if (window.confirm('This will reset all CV data. Are you sure?')) {
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
			<Header mode={formMode} {...headerControls} printCV={printCV} />
			<div className='main'>
				{formMode ? (
					<FormOverview
						innerRef={componentRef}
						data={currentData}
						{...dataHandlers}
					/>
				) : (
					<DirectEdit
						innerRef={componentRef}
						data={currentData}
						dataHandlers={dataHandlers}
					/>
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
