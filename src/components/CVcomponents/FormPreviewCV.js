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
		experience: {
			company: '',
			position: '',
			city: '',
			workStarted: '2000-01-01',
			workEnded: '2020-01-01',
		},
		education: {
			university: '',
			universityCity: '',
			degree: '',
			subject: '',
			universityStarted: '2000-01-01',
			universityEnded: '2020-01-01',
		},
	});

	function handlePersonal(e) {
		const { name, value } = e.target;
		setAllCVData((prevState) => ({
			...prevState,
			personal: {
				...prevState.personal,
				[name]: value,
			},
		}));
	}

	function handleExperience(e) {
		const { name, value } = e.target;
		setAllCVData((prevState) => ({
			...prevState,
			experience: {
				...prevState.experience,
				[name]: value,
			},
		}));
	}

	function handleEducation(e) {
		const { name, value } = e.target;
		setAllCVData((prevState) => ({
			...prevState,
			education: {
				...prevState.education,
				[name]: value,
			},
		}));
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
					handleInput={handlePersonal}
				/>
				<Experience
					data={allCVData.experience}
					handleInput={handleExperience}
				/>
				<Education
					data={allCVData.education}
					handleInput={handleEducation}
				/>
			</div>
		</div>
	);
}

export default FormPreviewCV;
