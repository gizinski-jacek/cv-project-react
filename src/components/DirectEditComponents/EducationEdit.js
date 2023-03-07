function EducationEdit({ item, handleChange, handleRemove }) {
	return (
		<div className='item editing'>
			<span className='date'>
				<input
					type='date'
					name='eduStart'
					placeholder='Started'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={item.eduStart}
					onChange={(e) => handleChange(e, item.id)}
				/>
				<input
					type='date'
					name='eduEnd'
					placeholder='Ended'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={item.eduEnd}
					onChange={(e) => handleChange(e, item.id)}
				/>
			</span>
			<input
				type='text'
				name='school'
				placeholder='School'
				value={item.school}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='schoolCity'
				placeholder='City'
				value={item.schoolCity}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='degree'
				placeholder='Degree'
				value={item.degree}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='subject'
				placeholder='Subject'
				value={item.subject}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<button
				className='removeEntryBtnInCV'
				type='button'
				onClick={() => handleRemove(item.id)}
			>
				Remove entry
			</button>
			<hr className='grayHR' />
		</div>
	);
}

export default EducationEdit;
