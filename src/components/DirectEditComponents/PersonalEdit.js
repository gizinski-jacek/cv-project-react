function PersonalEdit({
	personal,
	handleChange,
	handleFile,
	experienceItems,
	educationItems,
	removePersonalSection,
	addPersonalSection,
	addExperience,
	addEducation,
	addSection,
	removeSection,
	showSectionBtns,
	hideSectionBtns,
	showButtons,
	hideButtons,
}) {
	return (
		<div className='mainCV'>
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
				<h1>
					{personal.title !== undefined ? (
						<>
							<input
								type='text'
								name='title'
								placeholder='Title'
								value={personal.title}
								onChange={handleChange}
							/>
							<button
								type='button'
								className='removePersonalSectionBtnInCV'
								onClick={() => removePersonalSection('title')}
							>
								Remove title
							</button>
						</>
					) : (
						<button
							type='button'
							className='addPersonalSectionBtnInCV'
							onClick={() => addPersonalSection('title')}
						>
							Add title
						</button>
					)}
				</h1>
			</div>
			<div className='cvBody'>
				<div className='leftPanelCV editing'>
					{personal.photo !== undefined ? (
						<div>
							<button
								className='photoBtn'
								onClick={() => {
									document.getElementById('photoFile')?.click();
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
							<button
								type='button'
								className='removePersonalSectionBtnInCV'
								onClick={() => removePersonalSection('photo')}
							>
								Remove photo
							</button>
						</div>
					) : (
						<button
							type='button'
							className='addPersonalSectionBtnInCV'
							onClick={() => addPersonalSection('photo')}
						>
							Add photo
						</button>
					)}
					{personal.birth !== undefined ? (
						<div>
							<h3>Date of Birth</h3>
							<hr className='blackHR' />
							<input
								type='date'
								name='birth'
								min={`${new Date().getFullYear() - 100}-01-01`}
								max={`${new Date().getFullYear() + 100}-12-31`}
								value={personal.birth}
								onChange={handleChange}
							/>
							<button
								type='button'
								className='removePersonalSectionBtnInCV'
								onClick={() => removePersonalSection('birth')}
							>
								Remove birth date
							</button>
						</div>
					) : (
						<button
							type='button'
							className='addPersonalSectionBtnInCV'
							onClick={() => addPersonalSection('birth')}
						>
							Add birth date
						</button>
					)}
					<div>
						<h3>Address</h3>
						<hr className='blackHR' />
						<textarea
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
				<div
					className='rightPanelCV'
					onMouseEnter={showButtons}
					onMouseLeave={hideButtons}
				>
					{personal.profile !== undefined ? (
						<div className='profile editing'>
							<h3>Profile</h3>
							<hr className='blackHR' />
							<textarea
								type='text'
								name='profile'
								rows='3'
								placeholder='Profile'
								value={personal.profile}
								onChange={handleChange}
							/>
							<button
								type='button'
								className='removePersonalSectionBtnInCV'
								onClick={() => removePersonalSection('profile')}
							>
								Remove profile field
							</button>
						</div>
					) : (
						<button
							type='button'
							className='addPersonalSectionBtnInCV'
							onClick={() => addPersonalSection('profile')}
						>
							Add profile field
						</button>
					)}
					{experienceItems ? (
						<div
							className='experience'
							onMouseEnter={showSectionBtns}
							onMouseLeave={hideSectionBtns}
						>
							<h3>Experience</h3>
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
					{educationItems ? (
						<div
							className='education'
							onMouseEnter={showSectionBtns}
							onMouseLeave={hideSectionBtns}
						>
							<h3>Education</h3>
							<div
								id='eduSectionBtns'
								onMouseEnter={showSectionBtns}
								onMouseLeave={hideSectionBtns}
							>
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

export default PersonalEdit;
