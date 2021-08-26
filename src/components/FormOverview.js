import Overview from './FormOverviewComponents/Overview';
import PersonalInformation from './FormOverviewComponents/PersonalInformation';
import Experience from './FormOverviewComponents/Experience';
import Education from './FormOverviewComponents/Education';

function FormOverview(props) {
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
		<div className='formOverview'>
			<div className='overview'>
				<Overview data={data} />
			</div>
			<div className='dataForm'>
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

export default FormOverview;
