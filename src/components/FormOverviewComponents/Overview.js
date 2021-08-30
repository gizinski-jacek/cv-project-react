function Overview(props) {
	const { personal, experience, education } = props.data;

	const expDisplay = experience.map((item) => {
		let expStartEndDate;
		if (experience.startDate || education.endDate) {
			expStartEndDate = experience.startDate.startDate(
				' - ',
				education.endDate
			);
		}
		return (
			<div key={item.id} className='item'>
				<span className='date' placeholder_text='Start Date - End Date'>
					{expStartEndDate}
				</span>
				<p placeholder_text='Company'>{item.company}</p>
				<p placeholder_text='City'>{item.city}</p>
				<p placeholder_text='Position'>{item.position}</p>
				<hr className='grayHR' />
			</div>
		);
	});

	const eduDisplay = education.map((item) => {
		let eduStartEndDate;
		if (education.startDate || education.endDate) {
			eduStartEndDate = education.startDate.concat(
				' - ',
				education.endDate
			);
		}
		return (
			<div key={item.id} className='item'>
				<span className='date' placeholder_text='Start Date - End Date'>
					{eduStartEndDate}
				</span>
				<p placeholder_text='University'>{item.university}</p>
				<p placeholder_text='City'>{item.uniCity}</p>
				<p placeholder_text='Degree:'>
					{item.degree ? 'Degree: ' + item.degree : null}
				</p>
				<p placeholder_text='Subject:'>
					{item.subject ? 'Subject: ' + item.subject : null}
				</p>
				<hr className='grayHR' />
			</div>
		);
	});

	let fullName;
	if (personal.firstName || personal.lastName) {
		fullName = personal.firstName.concat(' ', personal.lastName);
	}

	return (
		<div ref={props.innerRef}>
			<div className='headerCV'>
				<h1 placeholder_text='Full Name'>{fullName}</h1>
				<hr className='blackHR' />
				<h2 placeholder_text='Title'>{personal.title}</h2>
			</div>
			<div className='mainCVBody'>
				<div className='leftPanelCV'>
					<div>
						<img src={personal.photo} alt='' />
					</div>
					<div>
						<h3>Date of Birth</h3>
						<hr className='blackHR' />
						<p placeholder_text='YYYY-MM-DD'>{personal.birth}</p>
					</div>
					<div>
						<h3>Address</h3>
						<hr className='blackHR' />
						<p placeholder_text='Address'>{personal.address}</p>
					</div>
					<div>
						<h3>Phone Number</h3>
						<hr className='blackHR' />
						<p placeholder_text='Phone Number'>{personal.phone}</p>
					</div>
					<div>
						<h3>Email</h3>
						<hr className='blackHR' />
						<p placeholder_text='Email'>{personal.email}</p>
					</div>
				</div>
				<div className='rightPanelCV'>
					<div className='description'>
						<h3>Description</h3>
						<hr className='blackHR' />
						<p placeholder_text='Your description'>
							{personal.description}
						</p>
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
		</div>
	);
}

export default Overview;
