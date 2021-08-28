function EducationEdit(props) {
	const { item, education, handleChange, handleRemove } = props;
	return (
		<div className='item editing'>
			<span className='date'>
				<input
					type='date'
					name='uniStart'
					placeholder='Started'
					min='1950-01-01'
					max='2050-12-31'
					value={education.uniStart}
					onChange={(e) => handleChange(e, item.id)}
				/>
				<input
					type='date'
					name='uniEnd'
					placeholder='Ended'
					min='1950-01-01'
					max='2050-12-31'
					value={education.uniEnd}
					onChange={(e) => handleChange(e, item.id)}
				/>
			</span>
			<input
				type='text'
				name='university'
				placeholder='University'
				value={education.university}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='uniCity'
				placeholder='City'
				value={education.uniCity}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='degree'
				placeholder='Degree'
				value={education.degree}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='subject'
				placeholder='Subject'
				value={education.subject}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<button
				className='removeBtnFloat'
				type='submit'
				onClick={(e) => handleRemove(e, item.id)}
			>
				Remove section
			</button>
			<hr className='grayHR' />
		</div>
	);
}

export default EducationEdit;
