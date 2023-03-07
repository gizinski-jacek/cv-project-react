import EduSection from './EduSection';

function Education({
	data,
	handleChange,
	handleAdd,
	handleRemove,
	removeSection,
}) {
	const educationItems = data?.map((item) => (
		<EduSection
			key={item.id}
			data={item}
			handleChange={handleChange}
			handleRemove={handleRemove}
		/>
	));
	return (
		<section>
			<div>
				<h3>Education</h3>
				<button
					type='button'
					className='removeSectionBtnInForm'
					onClick={() => removeSection('education')}
				>
					Remove section
				</button>
			</div>
			{educationItems}
			<button className='addEntryBtnInForm' type='button' onClick={handleAdd}>
				Add new entry
			</button>
		</section>
	);
}

export default Education;
