function PersonalInformation(props) {
	return (
		<section>
			<h3>Personal Information</h3>
			<form id='personal'>
				<label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						placeholder='First Name'
						value={props.data.firstName}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						placeholder='Last Name'
						value={props.data.lastName}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='text'
						id='title'
						name='title'
						placeholder='Title'
						value={props.data.title}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='text'
						id='photo'
						name='photo'
						placeholder='Photo'
						value={props.data.photo}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='date'
						id='birth'
						name='birth'
						min='1950-01-01'
						max='2005-01-01'
						value={props.data.birth}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='text'
						id='address'
						name='address'
						placeholder='Address'
						value={props.data.address}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='tel'
						id='phone'
						name='phone'
						placeholder='Phone'
						value={props.data.phone}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email'
						value={props.data.email}
						onChange={props.handleInput}
					/>
				</label>
				<label>
					<textarea
						type='text'
						id='description'
						name='description'
						rows='3'
						placeholder='Description'
						value={props.data.description}
						onChange={props.handleInput}
					/>
				</label>
			</form>
		</section>
	);
}

export default PersonalInformation;