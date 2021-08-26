function Header(props) {
	const { mode, changeMode, saveData, wipeData } = props;
	return (
		<div className='header'>
			<h1>CV Creator</h1>
			<div className='mode'>
				{mode === 'directEdit' ? (
					<>
						<button
							id='directEdit'
							className='activeMode'
							onClick={changeMode}
						>
							Direct Edit
						</button>
						<button id='formOverview' onClick={changeMode}>
							{'Form & Preview'}
						</button>
					</>
				) : (
					<>
						<button id='directEdit' onClick={changeMode}>
							Direct Edit
						</button>
						<button
							id='formOverview'
							className='activeMode'
							onClick={changeMode}
						>
							{'Form & Preview'}
						</button>
					</>
				)}
			</div>
			<div className='dataControls'>
				<button id='saveData' onClick={saveData}>
					Save Data
				</button>
				<button id='wipeData' onClick={wipeData}>
					Wipe Data
				</button>
			</div>
		</div>
	);
}

export default Header;
