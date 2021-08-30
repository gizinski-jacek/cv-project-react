function ExperienceEdit(props) {
	const { item, experience, handleChange, handleRemove } = props;
	return (
		<div className='item editing'>
			<span className='date'>
				<input
					type='date'
					name='workStart'
					placeholder='Started'
					min='1950-01-01'
					max='2050-12-31'
					value={experience.workStart}
					onChange={(e) => handleChange(e, item.id)}
				/>
				<input
					type='date'
					name='workEnd'
					placeholder='Ended'
					min='1950-01-01'
					max='2050-12-31'
					value={experience.workEnd}
					onChange={(e) => handleChange(e, item.id)}
				/>
			</span>
			<input
				type='text'
				name='company'
				placeholder='Company'
				value={experience.company}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='city'
				placeholder='City'
				value={experience.city}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='position'
				placeholder='Position'
				value={experience.position}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<button
				className='deleteBtnInCV'
				type='submit'
				onClick={(e) => handleRemove(e, item.id)}
			>
				Remove section
			</button>
			<hr className='grayHR' />
		</div>
	);
}

export default ExperienceEdit;
