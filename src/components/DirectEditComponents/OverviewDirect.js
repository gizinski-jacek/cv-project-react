import PersonalEdit from './PersonalEdit';
import ExperienceEdit from './ExperienceEdit';
import EducationEdit from './EducationEdit';

function OverviewDirect({
	innerRef,
	personal,
	experience,
	education,
	changePersonal,
	changeFile,
	changeExperience,
	addExperience,
	removeExperienceEntry,
	changeEducation,
	addEducation,
	removeEducationEntry,
	editing,
	toggle,
	addSection,
	removeSection,
	addPersonalSection,
	removePersonalSection,
}) {
	function showSectionBtns(e) {
		const ele1 = document.getElementById('expSectionBtns');
		const ele2 = document.getElementById('eduSectionBtns');
		if (e.currentTarget.className === 'experience' && ele1) {
			ele1.style.display = 'flex';
		} else if (ele2) {
			ele2.style.display = 'flex';
		}
	}

	function hideSectionBtns(e) {
		const ele1 = document.getElementById('expSectionBtns');
		const ele2 = document.getElementById('eduSectionBtns');
		if (e.currentTarget.className === 'experience' && ele1) {
			ele1.style.display = 'none';
		} else if (ele2) {
			ele2.style.display = 'none';
		}
	}

	function showButtons(e) {
		if (e.currentTarget.className === 'rightPanelCV') {
			const ele1 = document.getElementById('addExpSectionBtnInCV');
			const ele2 = document.getElementById('addEduSectionBtnInCV');
			if (ele1) ele1.style.display = 'block';
			if (ele2) ele2.style.display = 'block';
		}
	}

	function hideButtons(e) {
		if (e.currentTarget.className === 'rightPanelCV') {
			const ele1 = document.getElementById('addExpSectionBtnInCV');
			const ele2 = document.getElementById('addEduSectionBtnInCV');
			if (ele1) ele1.style.display = 'none';
			if (ele2) ele2.style.display = 'none';
		}
	}

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

	const experienceItems = experience?.map((item) => {
		if (editing.experience) {
			return (
				<ExperienceEdit
					key={item.id}
					item={item}
					handleChange={changeExperience}
					handleRemove={removeExperienceEntry}
				/>
			);
		} else {
			return (
				<div key={item.id} className='item' onClick={(e) => toggle(e, item.id)}>
					<span className='date' placeholder_text='Start Date - End Date'>
						{formatDate(item.workStart, item.workEnd)}
					</span>
					<p placeholder_text='Company'>{item.company}</p>
					<p placeholder_text='City'>{item.city}</p>
					<p placeholder_text='Position'>{item.position}</p>
					<hr className='grayHR' />
				</div>
			);
		}
	});

	const educationItems = education?.map((item) => {
		if (editing.education) {
			return (
				<EducationEdit
					key={item.id}
					item={item}
					handleChange={changeEducation}
					handleRemove={removeEducationEntry}
				/>
			);
		} else {
			return (
				<div key={item.id} className='item' onClick={(e) => toggle(e, item.id)}>
					<span className='date' placeholder_text='Start Date - End Date'>
						{formatDate(item.eduStart, item.eduEnd)}
					</span>
					<p placeholder_text='School'>{item.school}</p>
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
		}
	});

	if (editing.personal) {
		return (
			<PersonalEdit
				personal={personal}
				handleChange={changePersonal}
				handleFile={changeFile}
				experienceItems={experienceItems}
				educationItems={educationItems}
				removePersonalSection={removePersonalSection}
				addPersonalSection={addPersonalSection}
				addExperience={addExperience}
				addEducation={addEducation}
				addSection={addSection}
				removeSection={removeSection}
				showSectionBtns={showSectionBtns}
				hideSectionBtns={hideSectionBtns}
				showButtons={showButtons}
				hideButtons={hideButtons}
			/>
		);
	} else {
		return (
			<div ref={innerRef} className='mainCV'>
				<div className='headerCV' onClick={(e) => toggle(e)}>
					<h1 placeholder_text='Full Name'>
						{formatName(personal.firstName, personal.lastName)}
					</h1>
					{personal.title !== undefined && (
						<>
							<hr className='blackHR' />
							<h2 placeholder_text='Title'>{personal.title}</h2>
						</>
					)}
				</div>
				<div className='cvBody'>
					<div className='leftPanelCV' onClick={(e) => toggle(e)}>
						{personal.photo !== undefined && (
							<div>
								<img src={personal.photo} alt='' />
							</div>
						)}
						{personal.birth !== undefined && (
							<div>
								<h3>Date of Birth</h3>
								<hr className='blackHR' />
								<p placeholder_text='Date'>
									{personal.birth &&
										new Date(personal.birth).toLocaleDateString()}
								</p>
							</div>
						)}
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
					<div
						className='rightPanelCV'
						onClick={(e) => toggle(e)}
						onMouseEnter={showButtons}
						onMouseLeave={hideButtons}
					>
						{personal.profile !== undefined && (
							<div className='profile'>
								<h3>Profile</h3>
								<hr className='blackHR' />
								<p placeholder_text='Your profile'>{personal.profile}</p>
							</div>
						)}
						{experience ? (
							<div
								className='experience'
								onMouseEnter={showSectionBtns}
								onMouseLeave={hideSectionBtns}
							>
								<h3>
									Experience
									<div id='expSectionBtns'>
										<button
											className='addEntryBtnInCV'
											type='button'
											onClick={addExperience}
										>
											Add entry
										</button>
										<button
											className='removeSectionBtnInCV'
											type='button'
											onClick={() => removeSection('experience')}
										>
											Remove section
										</button>
									</div>
								</h3>
								<hr className='blackHR' />
								{experienceItems}
							</div>
						) : (
							<button
								id='addExpSectionBtnInCV'
								type='button'
								onClick={() => addSection('experience')}
							>
								Add experience section
							</button>
						)}
						{education ? (
							<div
								className='education'
								onMouseEnter={showSectionBtns}
								onMouseLeave={hideSectionBtns}
							>
								<h3>
									Education
									<div id='eduSectionBtns'>
										<button
											className='addEntryBtnInCV'
											type='button'
											onClick={addEducation}
										>
											Add entry
										</button>
										<button
											className='removeSectionBtnInCV'
											type='button'
											onClick={() => removeSection('education')}
										>
											Remove section
										</button>
									</div>
								</h3>
								<hr className='blackHR' />
								{educationItems}
							</div>
						) : (
							<button
								id='addEduSectionBtnInCV'
								type='button'
								onClick={() => addSection('education')}
							>
								Add education section
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default OverviewDirect;
