import Overview from './FormOverviewComponents/Overview';
import PersonalInformation from './FormOverviewComponents/PersonalInformation';
import Experience from './FormOverviewComponents/Experience';
import Education from './FormOverviewComponents/Education';
import { useEffect, useState } from 'react';

function FormOverview({
	innerRef,
	data,
	changePersonal,
	changeFile,
	changeExperience,
	addExperience,
	removeExperienceEntry,
	changeEducation,
	addEducation,
	removeEducationEntry,
	addSection,
	removeSection,
	addPersonalSection,
	removePersonalSection,
}) {
	const [show, setShow] = useState(false);
	const [fixed, setFixed] = useState(false);

	const togglePreview = (e) => {
		e.stopPropagation();
		if (e.target.className.includes('overview-wrapper')) {
			document.documentElement.style.overflow = '';
			setShow(false);
		} else {
			document.documentElement.style.overflow = 'hidden';
			setShow(true);
		}
	};

	const toggleBtnFixed = () => {
		setFixed(document.documentElement.scrollTop > 100);
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;
		window.addEventListener('scroll', toggleBtnFixed);

		return () => window.removeEventListener('scroll', toggleBtnFixed);
	});

	return (
		<div className='formOverviewMode'>
			<div
				className={`overview-wrapper ${show ? 'show' : ''}`}
				onClick={togglePreview}
			>
				<div className='overview'>
					<Overview {...data} innerRef={innerRef} />
				</div>
			</div>
			<div className='dataForm'>
				<button
					type='button'
					className={`previewCVBtn ${fixed ? 'fixed' : ''}`}
					onClick={togglePreview}
				>
					Preview CV
				</button>
				<PersonalInformation
					data={data.personal}
					handleChange={changePersonal}
					handleFile={changeFile}
					addPersonalSection={addPersonalSection}
					removePersonalSection={removePersonalSection}
				/>
				{data.experience ? (
					<Experience
						data={data.experience}
						handleChange={changeExperience}
						handleAdd={addExperience}
						handleRemove={removeExperienceEntry}
						removeSection={removeSection}
						addSection={addSection}
					/>
				) : (
					<button
						type='submit'
						className='addSectionInForm'
						onClick={() => addSection('experience')}
					>
						Add experience section
					</button>
				)}
				{data.education ? (
					<Education
						data={data.education}
						handleChange={changeEducation}
						handleAdd={addEducation}
						handleRemove={removeEducationEntry}
						removeSection={removeSection}
						addSection={addSection}
					/>
				) : (
					<button
						type='submit'
						className='addSectionInForm'
						onClick={() => addSection('education')}
					>
						Add education section
					</button>
				)}
			</div>
		</div>
	);
}

export default FormOverview;
