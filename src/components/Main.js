import DirectCV from './CVcomponents/DirectCV';
import FormPreviewCV from './CVcomponents/FormPreviewCV';

function Main(props) {
	return (
		<div className='main'>
			{props.inputMode === 'direct' ? <DirectCV /> : <FormPreviewCV />}
		</div>
	);
}

export default Main;
