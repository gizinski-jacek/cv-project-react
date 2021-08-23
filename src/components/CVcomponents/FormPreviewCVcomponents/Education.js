import EduSection from './EduSection';

function Education(props) {
	const eduItems = props.data.map((item) => (
		<EduSection
			key={item.id}
			data={item}
			handleChange={props.handleChange}
			handleRemove={props.handleRemove}
		/>
	));
	return (
		<section>
			<h3>Education</h3>
			{eduItems}
			<button type='submit' onClick={props.handleAdd}>
				Add above section
			</button>
		</section>
	);
}

export default Education;
