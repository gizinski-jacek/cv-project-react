function PersonalInformation() {
	return (
		<section>
			<h3>Personal Information</h3>
			<form>
				<label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						placeholder='First Name'
					/>
				</label>
				<label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						placeholder='Last Name'
					/>
				</label>
				<label>
					<input
						type='text'
						id='title'
						name='title'
						placeholder='Title'
					/>
				</label>
				<label>
					<input
						type='text'
						id='photo'
						name='photo'
						placeholder='Photo'
					/>
				</label>
				<label>
					<input
						type='date'
						id='birth'
						name='birth'
						placeholder='Date of birth'
						min='1950-01-01'
						max='2005-01-01'
					/>
				</label>
				<label>
					<input
						type='text'
						id='address'
						name='address'
						placeholder='Address'
					/>
				</label>
				<label>
					<input
						type='tel'
						id='phone'
						name='phone'
						placeholder='Phone'
					/>
				</label>
				<label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Email'
					/>
				</label>
				<label>
					<textarea
						type='text'
						id='description'
						name='description'
						rows='3'
						placeholder='Description'
					/>
				</label>
			</form>
		</section>
	);
}

export default PersonalInformation;
