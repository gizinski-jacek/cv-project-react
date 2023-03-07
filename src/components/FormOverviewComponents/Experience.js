import ExpSection from './ExpSection';

function Experience({
	data,
	handleChange,
	handleAdd,
	handleRemove,
	removeSection,
}) {
	const experienceItems = data?.map((item) => (
		<ExpSection
			key={item.id}
			data={item}
			handleChange={handleChange}
			handleRemove={handleRemove}
		/>
	));
	return (
		<section>
			<div>
				<h3>Experience</h3>
				<button
					type='button'
					className='removeSectionBtnInForm'
					onClick={() => removeSection('experience')}
				>
					Remove section
				</button>
			</div>
			{experienceItems}
			<button className='addEntryBtnInForm' type='button' onClick={handleAdd}>
				Add new entry
			</button>
		</section>
	);
}

export default Experience;
