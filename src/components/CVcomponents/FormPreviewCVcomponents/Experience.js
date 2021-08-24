import ExpSection from './ExpSection';

function Experience(props) {
	const expItems = props.data.map((item) => (
		<ExpSection
			key={item.id}
			data={item}
			handleChange={props.handleChange}
			handleRemove={props.handleRemove}
		/>
	));
	return (
		<section>
			<h3>Experience</h3>
			{expItems}
			<button className='addBtn' type='submit' onClick={props.handleAdd}>
				Add above section
			</button>
		</section>
	);
}

export default Experience;
