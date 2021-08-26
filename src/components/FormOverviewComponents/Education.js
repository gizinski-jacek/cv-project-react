import EduSection from './EduSection';

function Education(props) {
	const { data, handleChange, handleAdd, handleRemove } = props;
	const eduItems = data.map((item) => (
		<EduSection
			key={item.id}
			data={item}
			handleChange={handleChange}
			handleRemove={handleRemove}
		/>
	));
	return (
		<section>
			<h3>Education</h3>
			{eduItems}
			<button className='addBtn' type='submit' onClick={handleAdd}>
				Add section
			</button>
		</section>
	);
}

export default Education;