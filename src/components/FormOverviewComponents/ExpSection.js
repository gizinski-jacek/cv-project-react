function ExpSection(props) {
	const { data, handleChange, handleRemove } = props;
	return (
		<form>
			<label>
				<input
					type='text'
					name='company'
					placeholder='Company'
					value={data.company}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='city'
					placeholder='City'
					value={data.city}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='position'
					placeholder='Position'
					value={data.position}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='workStart'
					placeholder='Started'
					min='1950-01-01'
					max='2050-12-31'
					value={data.workStart}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='workEnd'
					placeholder='Ended'
					min='1950-01-01'
					max='2050-12-31'
					value={data.workEnd}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<button
				className='deleteBtn'
				onClick={(e) => handleRemove(e, data.id)}
			>
				Delete above section
			</button>
		</form>
	);
}
export default ExpSection;
