function PersonalInformation(props) {
	const { data, handleChange, handleFile } = props;
	return (
		<section>
			<h3>Personal Information</h3>
			<form>
				<label>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						value={data.firstName}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						value={data.lastName}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='title'
						placeholder='Title'
						value={data.title}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span name='photo'>Photo...</span>
					<input
						type='file'
						name='photo'
						placeholder='Photo'
						accept='.png,.jpeg,.jpg'
						onChange={handleFile}
					/>
				</label>
				<label>
					<input
						type='date'
						name='birth'
						min='1950-01-01'
						max='2050-12-31'
						value={data.birth}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='address'
						placeholder='Address'
						value={data.address}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='tel'
						name='phone'
						placeholder='Phone'
						value={data.phone}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={data.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					<textarea
						type='text'
						name='description'
						rows='3'
						placeholder='Description'
						value={data.description}
						onChange={handleChange}
					/>
				</label>
			</form>
		</section>
	);
}

export default PersonalInformation;
