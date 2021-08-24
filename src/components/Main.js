import DirectCV from './CVcomponents/DirectCV';
import FormPreviewCV from './CVcomponents/FormPreviewCV';

function Main(props) {
	return (
		<div className='main'>
			{props.inputMode === 'direct' ? (
				<DirectCV data={props.data} />
			) : (
				<FormPreviewCV savedData={props.savedData} />
			)}
		</div>
	);
}

export default Main;
