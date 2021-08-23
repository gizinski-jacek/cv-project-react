import { useState } from 'react';
import PreviewCV from './FormPreviewCVcomponents/PreviewCV';
import PersonalInformation from './FormPreviewCVcomponents/PersonalInformation';
import Experience from './FormPreviewCVcomponents/Experience';
import Education from './FormPreviewCVcomponents/Education';
import placeholderPhoto from '../Assets/placeholder-photo.jpeg';

function FormPreviewCV() {
	const [allCVData, setAllCVData] = useState({
		personal: {
			firstName: '',
			lastName: '',
			title: '',
			photo: '',
			birth: '2020-01-01',
			address: '',
			phone: '',
			email: '',
			description: '',
		},
		experience: [
			{
				id: 'exp0',
				company: '',
				position: '',
				city: '',
				workStart: '2000-01-01',
				workEnd: '2020-01-01',
			},
		],
		education: [
			{
				id: 'edu0',
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
		console.log(allCVData);
	}

	function handleAddExperience(e) {
		e.preventDefault();
		setAllCVData((prevState) => ({
			...prevState,
			experience: [
				...prevState.experience,
				{
					id: 'exp' + prevState.experience.length,
					company: '',
					position: '',
					city: '',
					workStart: '2000-01-01',
					workEnd: '2020-01-01',
				},
			],
		}));
	}

	// ^^^^^^^^^^^^^^^^^^
	// Rework new sections ID's, will create bugs right now when deleting.
	//

	function handleRemoveExperience(e, id) {
		e.preventDefault();
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
					id: 'edu0' + prevState.education.length,
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
