import { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import DirectEdit from './components/DirectEdit';
import FormOverview from './components/FormOverview';
import emptyCV from './components/Utils/emptyCV';
import { nanoid } from 'nanoid';
import { useReactToPrint } from 'react-to-print';

function App() {
	const [formMode, setFormMode] = useState(true);
	const [currentData, setCurrentData] = useState(null);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('localData'));
		const mode = JSON.parse(localStorage.getItem('preferredMode'));
		setCurrentData(data || emptyCV);
		setFormMode(mode === true ? true : false);
	}, []);

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

		addExperience() {
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

		removeExperienceEntry(id) {
			if (window.confirm('Deleting entry. Are you sure?')) {
				setCurrentData((prevState) => ({
					...prevState,
					experience: prevState.experience.filter((item) => item.id !== id),
				}));
			}
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

		addEducation() {
			setCurrentData((prevState) => ({
				...prevState,
				education: [
					...prevState.education,
					{
						id: nanoid(),
						school: '',
						schoolCity: '',
						degree: '',
						subject: '',
						eduStart: '',
						eduEnd: '',
					},
				],
			}));
		},

		removeEducationEntry(id) {
			if (window.confirm('Deleting entry. Are you sure?')) {
				setCurrentData((prevState) => ({
					...prevState,
					education: prevState.education.filter((item) => item.id !== id),
				}));
			}
		},

		addSection(name) {
			const newState = { ...currentData };
			newState[name] = emptyCV[name];
			setCurrentData(newState);
		},

		removeSection(name) {
			if (window.confirm(`Deleting entire ${name} section. Are you sure?`)) {
				const newState = { ...currentData };
				delete newState[name];
				setCurrentData(newState);
			}
		},

		addPersonalSection(name) {
			const newState = { ...currentData };
			newState.personal[name] = emptyCV.personal[name];
			setCurrentData(newState);
		},

		removePersonalSection(name) {
			if (
				window.confirm(
					`Deleting entire ${name} from personal info section. Are you sure?`
				)
			) {
				const newState = { ...currentData };
				delete newState.personal[name];
				setCurrentData(newState);
			}
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
			if (window.confirm('This will reset all your CV data. Are you sure?')) {
				localStorage.clear();
				setCurrentData(emptyCV);
			}
		},
	};

	useEffect(() => {
		localStorage.setItem('preferredMode', JSON.stringify(formMode));
	}, [formMode]);

	useEffect(() => {
		localStorage.setItem('localData', JSON.stringify(currentData));
	}, [currentData]);

	return (
		currentData && (
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
			</>
		)
	);
}

export default App;
