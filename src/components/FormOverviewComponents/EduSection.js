function EduSection(props) {
	const { data, handleChange, handleRemove } = props;
	return (
		<form>
			<label>
				<input
					type='text'
					name='university'
					placeholder='University'
					value={data.university}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='uniCity'
					placeholder='City'
					value={data.uniCity}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='degree'
					placeholder='Degree'
					value={data.degree}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='subject'
					placeholder='Subject'
					value={data.subject}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='uniStart'
					placeholder='Started'
					min='1950-01-01'
					max='2050-12-31'
					value={data.uniStart}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='uniEnd'
					placeholder='Ended'
					min='1950-01-01'
					max='2050-12-31'
					value={data.uniEnd}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<button
				className='deleteBtnInForm'
				onClick={(e) => handleRemove(e, data.id)}
			>
				Delete above section
			</button>
		</form>
	);
}

export default EduSection;
