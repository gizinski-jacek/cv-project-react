import ExpSection from './ExpSection';

function Experience(props) {
	const { data, handleChange, handleAdd, handleRemove } = props;
	const experienceItems = data.map((item) => (
		<ExpSection
			key={item.id}
			data={item}
			handleChange={handleChange}
			handleRemove={handleRemove}
		/>
	));
	return (
		<section>
			<h3>Experience</h3>
			{experienceItems}
			<button className='addBtn' type='submit' onClick={handleAdd}>
				Add section
			</button>
		</section>
	);
}

export default Experience;
