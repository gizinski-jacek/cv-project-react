function PreviewCV(props) {
	const { personal, experience, education } = props.data;
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
						<h3>{personal.photo}</h3>
					</div>
					<div>
						<h3>Date of Birth</h3>
						<p>{personal.birth}</p>
					</div>
					<div>
						<h3>Address</h3>
						<p>{personal.address}</p>
					</div>
					<div>
						<h3>Phone Number</h3>
						<p>{personal.phone}</p>
					</div>
					<div>
						<h3>Email</h3>
						<p>{personal.email}</p>
					</div>
				</div>
				<div className='rightPanelCV'>
					<div className='descriptionCV'>
						<h3>Description</h3>
						<p>Description</p>
					</div>
					<div className='experienceCV'>
						<h3>Experience</h3>
						<p>Experience</p>
						<p>Experience</p>
						<p>Experience</p>
					</div>
					<div className='educationCV'>
						<h3>Education</h3>
						<p>Education</p>
						<p>Education</p>
						<p>Education</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default PreviewCV;
