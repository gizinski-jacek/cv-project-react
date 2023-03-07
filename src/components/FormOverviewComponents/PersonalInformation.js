function PersonalInformation({
	data,
	handleChange,
	handleFile,
	addPersonalSection,
	removePersonalSection,
}) {
	return (
		<section>
			<h3>Personal Information</h3>
			<form>
				<label>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						value={data.firstName}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						value={data.lastName}
						onChange={handleChange}
					/>
				</label>
				{data.title !== undefined ? (
					<label>
						<input
							type='text'
							name='title'
							placeholder='Title'
							value={data.title}
							onChange={handleChange}
						/>
						<button
							type='button'
							className='removePersonalSectionBtnInCV'
							onClick={() => removePersonalSection('title')}
						>
							Remove
						</button>
					</label>
				) : (
					<button
						type='button'
						className='addPersonalSectionBtnInCV'
						onClick={() => addPersonalSection('title')}
					>
						Add title
					</button>
				)}
				{data.photo !== undefined ? (
					<label>
						<span name='photo'>Photo...</span>
						<input
							type='file'
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
							Remove
						</button>
					</label>
				) : (
					<button
						type='button'
						className='addPersonalSectionBtnInCV'
						onClick={() => addPersonalSection('photo')}
					>
						Add photo
					</button>
				)}
				{data.birth !== undefined ? (
					<label>
						<input
							type='date'
							name='birth'
							min={`${new Date().getFullYear() - 100}-01-01`}
							max={`${new Date().getFullYear() + 100}-12-31`}
							value={data.birth}
							onChange={handleChange}
						/>
						<button
							type='button'
							className='removePersonalSectionBtnInCV'
							onClick={() => removePersonalSection('birth')}
						>
							Remove
						</button>
					</label>
				) : (
					<button
						type='button'
						className='addPersonalSectionBtnInCV'
						onClick={() => addPersonalSection('birth')}
					>
						Add birth date
					</button>
				)}
				<label>
					<input
						type='text'
						name='address'
						placeholder='Address'
						value={data.address}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='tel'
						name='phone'
						placeholder='Phone'
						value={data.phone}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={data.email}
						onChange={handleChange}
					/>
				</label>
				{data.profile !== undefined ? (
					<label>
						<textarea
							type='text'
							name='profile'
							rows='3'
							placeholder='Profile'
							value={data.profile}
							onChange={handleChange}
						/>
						<button
							type='button'
							className='removePersonalSectionBtnInCV'
							onClick={() => removePersonalSection('profile')}
						>
							Remove
						</button>
					</label>
				) : (
					<button
						type='button'
						className='addPersonalSectionBtnInCV'
						onClick={() => addPersonalSection('profile')}
					>
						Add profile field
					</button>
				)}
			</form>
		</section>
	);
}

export default PersonalInformation;
