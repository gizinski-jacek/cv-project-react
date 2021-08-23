function PreviewCV(props) {
	const { personal, experience, education } = props.data;

	const experienceView = experience.map((item) => {
		return (
			<div key={item.id} className='item'>
				<span className='date'>
					{item.workStart} - {item.workEnd}
				</span>
				<p>{item.company}</p>
				<p>{item.city}</p>
				<p>{item.position}</p>
				<hr className='grayHR' />
			</div>
		);
	});

	const educationView = education.map((item) => {
		return (
			<div key={item.id} className='item'>
				<span className='date'>
					{item.uniStart} - {item.uniEnd}
				</span>
				<p>{item.university}</p>
				<p>{item.uniCity}</p>
				<p>Degree: {item.degree}</p>
				<p>Subject: {item.subject}</p>
				<hr className='grayHR' />
			</div>
		);
	});

	return (
		<>
			<div className='headerCV'>
				<div className='personalInformationCV'>
					<h1>
						{personal.firstName} {personal.lastName}
					</h1>
					<h2>{personal.title}</h2>
				</div>
			</div>
			<div className='mainBodyCV'>
				<div className='leftPanelCV'>
					<div>
						<h3>Photo 130x170</h3>
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
				<div className='rightPanelCV'>
					<div className='descriptionCV'>
						<h3>Description</h3>
						<hr className='blackHR' />
						<p>{personal.description}</p>
					</div>
					<div className='experienceCV'>
						<h3>Experience</h3>
						<hr className='blackHR' />
						{experienceView}
					</div>
					<div className='educationCV'>
						<h3>Education</h3>
						<hr className='blackHR' />
						{educationView}
					</div>
				</div>
			</div>
		</>
	);
}

export default PreviewCV;
