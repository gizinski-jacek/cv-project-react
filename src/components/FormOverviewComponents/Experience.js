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
			<button className='addBtnInForm' type='submit' onClick={handleAdd}>
				Add new section
			</button>
		</section>
	);
}

export default Experience;
