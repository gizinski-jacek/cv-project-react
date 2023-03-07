function ExperienceEdit({ item, handleChange, handleRemove }) {
	return (
		<div className='item editing'>
			<span className='date'>
				<input
					type='date'
					name='workStart'
					placeholder='Started'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={item.workStart}
					onChange={(e) => handleChange(e, item.id)}
				/>
				<input
					type='date'
					name='workEnd'
					placeholder='Ended'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={item.workEnd}
					onChange={(e) => handleChange(e, item.id)}
				/>
			</span>
			<input
				type='text'
				name='company'
				placeholder='Company'
				value={item.company}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='city'
				placeholder='City'
				value={item.city}
				onChange={(e) => handleChange(e, item.id)}
			/>
			<input
				type='text'
				name='position'
				placeholder='Position'
				value={item.position}
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

export default ExperienceEdit;
