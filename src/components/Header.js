function Header(props) {
	const { mode, changeMode, printCV, saveCV, resetCV } = props;
	return (
		<div className='header'>
			<h1>CV Creator</h1>
			<div className='mode'>
				<>
					<button
						id='formOverviewBtn'
						className={mode ? 'activeMode' : null}
						onClick={changeMode}
					></button>
					<button
						id='directEditBtn'
						className={mode ? null : 'activeMode'}
						onClick={changeMode}
					></button>
				</>
			</div>
			<div className='dataControls'>
				<button id='saveCV' onClick={saveCV}></button>
				<button id='printCV' onClick={printCV}></button>
				<button id='resetCV' onClick={resetCV}></button>
			</div>
		</div>
	);
}

export default Header;
