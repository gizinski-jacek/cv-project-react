import { useState } from 'react';
import PreviewCV from './FormPreviewCVcomponents/PreviewCV';
import PersonalInformation from './FormPreviewCVcomponents/PersonalInformation';
import Experience from './FormPreviewCVcomponents/Experience';
import Education from './FormPreviewCVcomponents/Education';

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

	function handleExperienceChange(e) {
		const { name, value, id } = e.target;
		setAllCVData((prevState) => {
			const newState = prevState.experience.map((item) => {
				if (item.id === 'exp' + (prevState.experience.length - 1)) {
					return { ...item, [name]: value };
				}
				return item;
			});
			return { ...prevState, experience: [...newState] };
		});
	}

	function handleEducationChange(e) {
		const { name, value, id } = e.target;
		setAllCVData((prevState) => {
			const newState = prevState.education.map((item) => {
				if (item.id === 'edu' + (prevState.education.length - 1)) {
					return { ...item, [name]: value };
				}
				return item;
			});
			return { ...prevState, education: [...newState] };
		});
	}

	// function handleNewSection(e) {
	// 	e.preventDefault();
	// 	const { name, value } = e.target;
	// 	console.log(e.target);
	// }

	return (
		<div className='formPreviewCV'>
			<div className='previewCV'>
				<PreviewCV data={allCVData} />
			</div>
			<div className='formCV'>
				<PersonalInformation
					data={allCVData.personal}
					handleInput={handlePersonalChange}
				/>
				<Experience
					data={allCVData.experience[allCVData.experience.length - 1]}
					handleInput={handleExperienceChange}
				/>
				<Education
					data={allCVData.education[allCVData.education.length - 1]}
					handleInput={handleEducationChange}
				/>
			</div>
		</div>
	);
}

export default FormPreviewCV;
