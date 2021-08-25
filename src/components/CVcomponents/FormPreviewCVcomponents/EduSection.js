function EduSection(props) {
	return (
		<form>
			<label>
				<input
					type='text'
					name='university'
					placeholder='University'
					value={props.data.university}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='uniCity'
					placeholder='City'
					value={props.data.uniCity}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='degree'
					placeholder='Degree'
					value={props.data.degree}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='subject'
					placeholder='Subject'
					value={props.data.subject}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='uniStart'
					placeholder='Started'
					min='1950-01-01'
					max='2050-12-31'
					value={props.data.uniStart}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='uniEnd'
					placeholder='Ended'
					min='1950-01-01'
					max='2050-12-31'
					value={props.data.uniEnd}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<button
				className='deleteBtn'
				onClick={(e) => props.handleRemove(e, props.data.id)}
			>
				Delete above section
			</button>
		</form>
	);
}

export default EduSection;
