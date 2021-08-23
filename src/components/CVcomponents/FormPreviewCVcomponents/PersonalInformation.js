function PersonalInformation(props) {
	return (
		<section>
			<h3>Personal Information</h3>
			<form>
				<label>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						value={props.data.firstName}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						value={props.data.lastName}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='title'
						placeholder='Title'
						value={props.data.title}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<span name='photo'>Photo...</span>
					<input
						type='file'
						name='photo'
						placeholder='Photo'
						accept='.png,.jpeg,.jpg'
						value={props.data.photo}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<input
						type='date'
						name='birth'
						min='1950-01-01'
						max='2005-01-01'
						value={props.data.birth}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='address'
						placeholder='Address'
						value={props.data.address}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<input
						type='tel'
						name='phone'
						placeholder='Phone'
						value={props.data.phone}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={props.data.email}
						onChange={props.handleChange}
					/>
				</label>
				<label>
					<textarea
						type='text'
						name='description'
						rows='3'
						placeholder='Description'
						value={props.data.description}
						onChange={props.handleChange}
					/>
				</label>
			</form>
		</section>
	);
}

export default PersonalInformation;
