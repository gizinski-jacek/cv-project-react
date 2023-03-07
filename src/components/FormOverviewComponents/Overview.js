function Overview({ personal, experience, education, innerRef }) {
	function formatName(first, last) {
		if (first || last) {
			return first.concat(' ', last);
		}
	}

	function formatDate(start, end) {
		if (start || end) {
			return new Date(start)
				.toLocaleDateString()
				.concat(' - ', end ? new Date(end).toLocaleDateString() : 'Present');
		}
	}

	const expDisplay = experience?.map((item) => {
		return (
			<div key={item.id} className='item'>
				<span className='date' placeholder_text='Start Date - End Date'>
					{formatDate(item.workStart, item.workEnd)}
				</span>
				<p placeholder_text='Company'>{item.company}</p>
				<p placeholder_text='City'>{item.city}</p>
				<p placeholder_text='Position'>{item.position}</p>
				<hr className='grayHR' />
			</div>
		);
	});

	const eduDisplay = education?.map((item) => {
		return (
			<div key={item.id} className='item'>
				<span className='date' placeholder_text='Start Date - End Date'>
					{formatDate(item.eduStart, item.eduEnd)}
				</span>
				<p placeholder_text='School'>{item.schoolversity}</p>
				<p placeholder_text='City'>{item.schoolCity}</p>
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

	return (
		<div ref={innerRef} className='mainCV'>
			<div className='headerCV'>
				<h1 placeholder_text='Full Name'>
					{formatName(personal.firstName, personal.lastName)}
				</h1>
				<hr className='blackHR' />
				<h2 placeholder_text='Title'>{personal.title}</h2>
			</div>
			<div className='cvBody'>
				<div className='leftPanelCV'>
					<div>
						<img src={personal.photo} alt='' />
					</div>
					<div>
						<h3>Date of Birth</h3>
						<hr className='blackHR' />
						<p placeholder_text='Date'>
							{personal.birth && new Date(personal.birth).toLocaleDateString()}
						</p>
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
					<div className='profile'>
						<h3>Profile</h3>
						<hr className='blackHR' />
						<p placeholder_text='Your profile'>{personal.profile}</p>
					</div>
					{experience && (
						<div className='experience'>
							<h3>Experience</h3>
							<hr className='blackHR' />
							{expDisplay}
						</div>
					)}
					{education && (
						<div className='education'>
							<h3>Education</h3>
							<hr className='blackHR' />
							{eduDisplay}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Overview;
