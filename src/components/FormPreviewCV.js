import PreviewCV from './FormPreviewCVcomponents/PreviewCV';
import PersonalInformation from './FormPreviewCVcomponents/PersonalInformation';
import Experience from './FormPreviewCVcomponents/Experience';
import Education from './FormPreviewCVcomponents/Education';

function FormPreviewCV(props) {
	const {
		data,
		changePersonal,
		changeFile,
		changeExperience,
		addExperience,
		removeExperience,
		changeEducation,
		addEducation,
		removeEducation,
	} = props;

	return (
		<div className='formPreviewCV'>
			<div className='previewCV'>
				<PreviewCV data={data} />
			</div>
			<div className='formCV'>
				<PersonalInformation
					data={data.personal}
					handleChange={changePersonal}
					handleFile={changeFile}
				/>
				<Experience
					data={data.experience}
					handleChange={changeExperience}
					handleAdd={addExperience}
					handleRemove={removeExperience}
				/>
				<Education
					data={data.education}
					handleChange={changeEducation}
					handleAdd={addEducation}
					handleRemove={removeEducation}
				/>
			</div>
		</div>
	);
}

export default FormPreviewCV;
