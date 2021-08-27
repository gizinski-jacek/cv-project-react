function Overview(props) {
	const { personal, experience, education } = props.data;

	const expDisplay = experience.map((item) => {
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

	const eduDisplay = education.map((item) => {
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
				<h1>
					{personal.firstName} {personal.lastName}
				</h1>
				<hr className='blackHR' />
				<h2>{personal.title}</h2>
			</div>
			<div className='mainCVBody'>
				<div className='leftPanelCV'>
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
				<div className='rightPanelCV'>
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

export default Overview;
