import { useState } from 'react';
import PreviewCV from './FormPreviewCVcomponents/PreviewCV';
import PersonalInformation from './FormPreviewCVcomponents/PersonalInformation';
import Experience from './FormPreviewCVcomponents/Experience';
import Education from './FormPreviewCVcomponents/Education';
import { nanoid } from 'nanoid';
import placeholderPhoto from '../Assets/placeholder-photo.jpeg';

function FormPreviewCV() {
	const [allCVData, setAllCVData] = useState({
		personal: {
			firstName: '',
			lastName: '',
			title: '',
			photo: placeholderPhoto,
			birth: '2020-01-01',
			address: '',
			phone: '',
			email: '',
			description: '',
		},
		experience: [
			{
				id: nanoid(),
				company: '',
				position: '',
				city: '',
				workStart: '2000-01-01',
				workEnd: '2020-01-01',
			},
		],
		education: [
			{
				id: nanoid(),
				university: '',
				uniCity: '',
				degree: '',
				subject: '',
				uniStart: '2000-01-01',
				uniEnd: '2020-01-01',
			},
		],
	});

	function handlePersonalChange(e) {
		const { name, value } = e.target;
		setAllCVData((prevState) => ({
			...prevState,
			personal: {
				...prevState.personal,
				[name]: value,
			},
		}));
	}

	function handleFileChange(e) {
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
	}

	function handleExperienceChange(e, id) {
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
	}

	function handleAddExperience(e) {
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
					workStart: '2000-01-01',
					workEnd: '2020-01-01',
				},
			],
		}));
	}

	function handleRemoveExperience(e, id) {
		e.preventDefault();
		setAllCVData((prevState) => ({
			...prevState,
			experience: prevState.experience.filter((item) => item.id !== id),
		}));
	}

	function handleEducationChange(e, id) {
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
	}

	function handleAddEducation(e) {
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
					uniStart: '2000-01-01',
					uniEnd: '2020-01-01',
				},
			],
		}));
	}

	function handleRemoveEducation(e, id) {
		e.preventDefault();
		setAllCVData((prevState) => ({
			...prevState,
			education: prevState.education.filter((item) => item.id !== id),
		}));
	}

	return (
		<div className='formPreviewCV'>
			<div className='previewCV'>
				<PreviewCV data={allCVData} />
			</div>
			<div className='formCV'>
				<PersonalInformation
					data={allCVData.personal}
					handleChange={handlePersonalChange}
					handleFile={handleFileChange}
				/>
				<Experience
					data={allCVData.experience}
					handleChange={handleExperienceChange}
					handleAdd={handleAddExperience}
					handleRemove={handleRemoveExperience}
				/>
				<Education
					data={allCVData.education}
					handleChange={handleEducationChange}
					handleAdd={handleAddEducation}
					handleRemove={handleRemoveEducation}
				/>
			</div>
		</div>
	);
}

export default FormPreviewCV;
