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
					>
						{'Form & Overview'}
					</button>
					<button
						id='directEditBtn'
						className={mode ? null : 'activeMode'}
						onClick={changeMode}
					>
						Direct Edit
					</button>
				</>
			</div>
			<div className='dataControls'>
				<button id='saveCV' onClick={saveCV}>
					Save CV
				</button>
				<button id='printCV' onClick={printCV}>
					Print CV
				</button>
				<button id='resetCV' onClick={resetCV}>
					Reset CV
				</button>
			</div>
		</div>
	);
}

export default Header;
