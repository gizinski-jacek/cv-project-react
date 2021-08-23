function Experience(props) {
	return (
		<section>
			<h3>Experience</h3>
			<form>
				<label>
					<input
						type='text'
						id='company'
						name='company'
						placeholder='Company'
						value={props.data.company}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='text'
						id='position'
						name='position'
						placeholder='Position'
						value={props.data.position}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='text'
						id='city'
						name='city'
						placeholder='City'
						value={props.data.city}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='date'
						id='workStart'
						name='workStart'
						placeholder='Started'
						min='1950-01-01'
						max='2020-01-01'
						value={props.data.workStart}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='date'
						id='workEnd'
						name='workEnd'
						placeholder='Ended'
						min='1950-01-01'
						max='2020-01-01'
						value={props.data.workEnd}
						onChange={props.handleInput}
					/>
				</label>
				<div>
					<button type='submit'>Add</button>
					<button type='submit'>Remove</button>
				</div>
			</form>
		</section>
	);
}

export default Experience;
