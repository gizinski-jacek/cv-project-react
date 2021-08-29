import PersonalEdit from './PersonalEdit';
import ExperienceEdit from './ExperienceEdit';
import EducationEdit from './EducationEdit';

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

	function showButton(e) {
		e.currentTarget.className === 'experience'
			? (document.getElementById('addExp').style.display = 'flex')
			: (document.getElementById('addEdu').style.display = 'flex');
	}

	function hideButton(e) {
		e.currentTarget.className === 'experience'
			? (document.getElementById('addExp').style.display = 'none')
			: (document.getElementById('addEdu').style.display = 'none');
	}

	let fullName;
	if (personal.firstName || personal.lastName) {
		fullName = personal.firstName.concat(' ', personal.lastName);
	}

	let expStartEndDate;
	if (experience.startDate || education.endDate) {
		expStartEndDate = experience.startDate.startDate(
			' - ',
			education.endDate
		);
	}

	let eduStartEndDate;
	if (education.startDate || education.endDate) {
		eduStartEndDate = education.startDate.concat(' - ', education.endDate);
	}

	const experienceItems = experience.map((item) => {
		if (props.editing.experience) {
			return (
				<ExperienceEdit
					key={item.id}
					item={item}
					experience={experience}
					handleChange={changeExperience}
					handleRemove={removeExperience}
				/>
			);
		} else {
			return (
				<div
					key={item.id}
					className='item'
					onClick={(e) => props.toggle(e, item.id)}
				>
					<span
						className='date'
						placeholder_text='Start Date - End Date'
					>
						{expStartEndDate}
					</span>
					<p placeholder_text='Company'>{item.company}</p>
					<p placeholder_text='City'>{item.city}</p>
					<p placeholder_text='Position'>{item.position}</p>
					<hr className='grayHR' />
				</div>
			);
		}
	});

	const educationItems = education.map((item) => {
		if (props.editing.education) {
			return (
				<EducationEdit
					key={item.id}
					item={item}
					education={education}
					handleChange={changeEducation}
					handleRemove={removeEducation}
				/>
			);
		} else {
			return (
				<div
					key={item.id}
					className='item'
					onClick={(e) => props.toggle(e, item.id)}
				>
					<span
						className='date'
						placeholder_text='Start Date - End Date'
					>
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
		}
	});

	if (props.editing.personal) {
		return (
			<PersonalEdit
				personal={personal}
				handleChange={changePersonal}
				handleFile={changeFile}
				experienceItems={experienceItems}
				educationItems={educationItems}
			/>
		);
	} else {
		return (
			<>
				<div className='headerCV' onClick={(e) => props.toggle(e)}>
					<h1 placeholder_text='Full Name'>{fullName}</h1>
					<hr className='blackHR' />
					<h2 placeholder_text='Title'>{personal.title}</h2>
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
							<p placeholder_text='YYYY-MM-DD'>
								{personal.birth}
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
							<p placeholder_text='Phone Number'>
								{personal.phone}
							</p>
						</div>
						<div>
							<h3>Email</h3>
							<hr className='blackHR' />
							<p placeholder_text='Email'>{personal.email}</p>
						</div>
					</div>
					<div
						className='rightPanelCV'
						onClick={(e) => props.toggle(e)}
					>
						<div className='description'>
							<h3>Description</h3>
							<hr className='blackHR' />
							<p placeholder_text='Your description'>
								{personal.description}
							</p>
						</div>
						<div
							className='experience'
							onMouseEnter={showButton}
							onMouseLeave={hideButton}
						>
							<h3>
								Experience
								<button
									className='addBtnFloat'
									id='addExp'
									type='submit'
									onClick={addExperience}
								>
									Add section
								</button>
							</h3>
							<hr className='blackHR' />
							{experienceItems}
						</div>
						<div
							className='education'
							onMouseEnter={showButton}
							onMouseLeave={hideButton}
						>
							<h3>
								Education
								<button
									className='addBtnFloat'
									id='addEdu'
									type='submit'
									onClick={addEducation}
								>
									Add section
								</button>
							</h3>
							<hr className='blackHR' />
							{educationItems}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default OverviewDirect;
