function EduSection({ data, handleChange, handleRemove }) {
	return (
		<form>
			<label>
				<input
					type='text'
					name='schoolversity'
					placeholder='School'
					value={data.schoolversity}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='schoolCity'
					placeholder='City'
					value={data.schoolCity}
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
					name='eduStart'
					placeholder='Started'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={data.eduStart}
					onChange={(e) => handleChange(e, data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='eduEnd'
					placeholder='Ended'
					min={`${new Date().getFullYear() - 100}-01-01`}
					max={`${new Date().getFullYear() + 100}-12-31`}
					value={data.eduEnd}
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

export default EduSection;
