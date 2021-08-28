function ExperienceEdit(props) {
	const {
		personal,
		handleChange,
		handleFile,
		experienceItems,
		educationItems,
	} = props;
	return (
		<>
			<div className='headerCV editing'>
				<h1>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						value={personal.firstName}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						value={personal.lastName}
						onChange={handleChange}
					/>
				</h1>
				<hr className='blackHR' />
				<input
					type='text'
					name='title'
					placeholder='Title'
					value={personal.title}
					onChange={handleChange}
				/>
			</div>
			<div className='mainCVBody'>
				<div className='leftPanelCV editing'>
					<div>
						<button
							onClick={() => {
								document.getElementById('photoFile').click();
							}}
						>
							<img
								src={personal.photo}
								alt=''
								name='photo'
								onChange={handleFile}
							/>
						</button>
						<input
							type='file'
							id='photoFile'
							name='photo'
							placeholder='Photo'
							accept='.png,.jpeg,.jpg'
							onChange={handleFile}
						/>
					</div>
					<div>
						<h3>Date of Birth</h3>
						<hr className='blackHR' />
						<input
							type='date'
							name='birth'
							min='1950-01-01'
							max='2050-12-31'
							value={personal.birth}
							onChange={handleChange}
						/>
					</div>
					<div>
						<h3>Address</h3>
						<hr className='blackHR' />
						<input
							type='text'
							name='address'
							placeholder='Address'
							value={personal.address}
							onChange={handleChange}
						/>
					</div>
					<div>
						<h3>Phone Number</h3>
						<hr className='blackHR' />
						<input
							type='tel'
							name='phone'
							placeholder='Phone'
							value={personal.phone}
							onChange={handleChange}
						/>
					</div>
					<div>
						<h3>Email</h3>
						<hr className='blackHR' />
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={personal.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='rightPanelCV'>
					<div className='description editing'>
						<h3>Description</h3>
						<hr className='blackHR' />
						<textarea
							type='text'
							name='description'
							rows='3'
							placeholder='Description'
							value={personal.description}
							onChange={handleChange}
						/>
					</div>
					<div className='experience'>
						<h3>Experience</h3>
						<hr className='blackHR' />
						{experienceItems}
					</div>
					<div className='education'>
						<h3>Education</h3>
						<hr className='blackHR' />
						{educationItems}
					</div>
				</div>
			</div>
		</>
	);
}

export default ExperienceEdit;
