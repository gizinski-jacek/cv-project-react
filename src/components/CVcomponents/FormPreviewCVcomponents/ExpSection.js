function ExpSection(props) {
	return (
		<form>
			<label>
				<input
					type='text'
					name='company'
					placeholder='Company'
					value={props.data.company}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='position'
					placeholder='Position'
					value={props.data.position}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='text'
					name='city'
					placeholder='City'
					value={props.data.city}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='workStart'
					placeholder='Started'
					min='1950-01-01'
					max='2020-01-01'
					value={props.data.workStart}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<label>
				<input
					type='date'
					name='workEnd'
					placeholder='Ended'
					min='1950-01-01'
					max='2020-01-01'
					value={props.data.workEnd}
					onChange={(e) => props.handleChange(e, props.data.id)}
				/>
			</label>
			<button onClick={(e) => props.handleRemove(e, props.data.id)}>
				Delete above section
			</button>
		</form>
	);
}
export default ExpSection;
