function ExpSection({ data, handleChange, handleRemove }) {
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
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={data.workStart}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='workEnd'
					placeholder='Ended'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={data.workEnd}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<button
				className='removeEntryBtnInForm'
				onClick={() => handleRemove(data.id)}
			>
				Remove above entry
			</button>
		</form>
	);
}
export default ExpSection;
