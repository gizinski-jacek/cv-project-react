function OverviewDirect(props) {
	const {
		personal,
		experience,
		education,
		changePersonal,
		changeFile,
		changeExperience,
		addExperience,
		removeExperience,
		changeEducation,
		addEducation,
		removeEducation,
	} = props;

	const expDisplay = experience.map((item) => {
		if (props.editing.experience) {
			return (
				<div key={item.id} className='item editing'>
					<span className='date'>
						<input
							type='date'
							name='workStart'
							placeholder='Started'
							min='1950-01-01'
							max='2050-12-31'
							value={experience.workStart}
							onChange={(e) => changeExperience(e, item.id)}
						/>
						<input
							type='date'
							name='workEnd'
							placeholder='Ended'
							min='1950-01-01'
							max='2050-12-31'
							value={experience.workEnd}
							onChange={(e) => changeExperience(e, item.id)}
						/>
					</span>
					<input
						type='text'
						name='company'
						placeholder='Company'
						value={experience.company}
						onChange={(e) => changeExperience(e, item.id)}
					/>
					<input
						type='text'
						name='city'
						placeholder='City'
						value={experience.city}
						onChange={(e) => changeExperience(e, item.id)}
					/>
					<input
						type='text'
						name='position'
						placeholder='Position'
						value={experience.position}
						onChange={(e) => changeExperience(e, item.id)}
					/>
					<hr className='grayHR' />
				</div>
			);
		} else {
			return (
				<div
					key={item.id}
					className='item'
					onClick={(e) => props.toggle(e, item.id)}
				>
					<span className='date'>
						{item.workStart} - {item.workEnd}
					</span>
					<p placeholder_text='Company Name'>{item.company}</p>
					<p placeholder_text='City'>{item.city}</p>
					<p placeholder_text='Position'>{item.position}</p>
					<hr className='grayHR' />
				</div>
			);
		}
	});

	const eduDisplay = education.map((item) => {
		if (props.editing.education) {
			return (
				<div key={item.id} className='item editing'>
					<span className='date'>
						<input
							type='date'
							name='uniStart'
							placeholder='Started'
							min='1950-01-01'
							max='2050-12-31'
							value={education.uniStart}
							onChange={(e) => changeEducation(e, item.id)}
						/>
						<input
							type='date'
							name='uniEnd'
							placeholder='Ended'
							min='1950-01-01'
							max='2050-12-31'
							value={education.uniEnd}
							onChange={(e) => changeEducation(e, item.id)}
						/>
					</span>
					<input
						type='text'
						name='university'
						placeholder='University'
						value={education.university}
						onChange={(e) => changeEducation(e, item.id)}
					/>
					<input
						type='text'
						name='uniCity'
						placeholder='City'
						value={education.uniCity}
						onChange={(e) => changeEducation(e, item.id)}
					/>
					<input
						type='text'
						name='degree'
						placeholder='Degree'
						value={education.degree}
						onChange={(e) => changeEducation(e, item.id)}
					/>
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						value={education.subject}
						onChange={(e) => changeEducation(e, item.id)}
					/>
					<hr className='grayHR' />
				</div>
			);
		} else {
			return (
				<div
					key={item.id}
					className='item'
					onClick={(e) => props.toggle(e, item.id)}
				>
					<span className='date'>
						{item.uniStart} - {item.uniEnd}
					</span>
					<p placeholder_text='University Name'>{item.university}</p>
					<p placeholder_text='City'>{item.uniCity}</p>
					<p>Degree: </p>
					<p>Subject: </p>
					<hr className='grayHR' />
				</div>
			);
		}
	});

	if (props.editing.personal) {
		return (
			<>
				<div className='headerCV'>
					<h1>
						<input
							type='text'
							name='firstName'
							placeholder='First Name'
							value={personal.firstName}
							onChange={changePersonal}
						/>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							value={personal.lastName}
							onChange={changePersonal}
						/>
					</h1>
					<hr className='blackHR' />
					<input
						type='text'
						name='title'
						placeholder='Title'
						value={personal.title}
						onChange={changePersonal}
					/>
				</div>
				<div className='mainCVBody'>
					<div className='leftPanelCV editing'>
						<div>
							<button
								onClick={() => {
									document
										.getElementById('photoFile')
										.click();
								}}
							>
								<img
									src={personal.photo}
									alt=''
									name='photo'
									onChange={changeFile}
								/>
							</button>
							<input
								type='file'
								id='photoFile'
								name='photo'
								placeholder='Photo'
								accept='.png,.jpeg,.jpg'
								onChange={changeFile}
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
								onChange={changePersonal}
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
								onChange={changePersonal}
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
								onChange={changePersonal}
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
								onChange={changePersonal}
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
								onChange={changePersonal}
							/>
						</div>
						<div className='experience'>
							<h3>Experience</h3>
							<hr className='blackHR' />
							{expDisplay}
						</div>
						<div className='education'>
							<h3>Education</h3>
							<hr className='blackHR' />
							{eduDisplay}
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className='headerCV' onClick={(e) => props.toggle(e)}>
					<h1>
						{personal.firstName} {personal.lastName}
					</h1>
					<hr className='blackHR' />
					<h2>{personal.title}</h2>
				</div>
				<div className='mainCVBody'>
					<div
						className='leftPanelCV'
						onClick={(e) => props.toggle(e)}
					>
						<div>
							<img src={personal.photo} alt='' />
						</div>
						<div>
							<h3>Date of Birth</h3>
							<hr className='blackHR' />
							<p>{personal.birth}</p>
						</div>
						<div>
							<h3>Address</h3>
							<hr className='blackHR' />
							<p>{personal.address}</p>
						</div>
						<div>
							<h3>Phone Number</h3>
							<hr className='blackHR' />
							<p>{personal.phone}</p>
						</div>
						<div>
							<h3>Email</h3>
							<hr className='blackHR' />
							<p>{personal.email}</p>
						</div>
					</div>
					<div
						className='rightPanelCV'
						onClick={(e) => props.toggle(e)}
					>
						<div className='description'>
							<h3>Description</h3>
							<hr className='blackHR' />
							<p>{personal.description}</p>
						</div>
						<div className='experience'>
							<h3>Experience</h3>
							<hr className='blackHR' />
							{expDisplay}
						</div>
						<div className='education'>
							<h3>Education</h3>
							<hr className='blackHR' />
							{eduDisplay}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default OverviewDirect;
