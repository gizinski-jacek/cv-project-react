import EduSection from './EduSection';

function Education(props) {
	const { data, handleChange, handleAdd, handleRemove } = props;
	const educationItems = data.map((item) => (
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
			{educationItems}
			<button className='addBtnInForm' type='submit' onClick={handleAdd}>
				Add new section
			</button>
		</section>
	);
}

export default Education;
