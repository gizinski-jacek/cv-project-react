import PreviewCV from './FormPreviewCVcomponents/PreviewCV';
import PersonalInformation from './FormPreviewCVcomponents/PersonalInformation';
import Experience from './FormPreviewCVcomponents/Experience';
import Education from './FormPreviewCVcomponents/Education';

function FormPreviewCV() {
	return (
		<div className='formPreviewCV'>
			<div className='previewCV'>
				<PreviewCV />
			</div>
			<div className='formCV'>
				<PersonalInformation />
				<Experience />
				<Education />
			</div>
		</div>
	);
}

export default FormPreviewCV;
