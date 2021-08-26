function Header(props) {
	const { mode, changeMode, saveData, clearData } = props;
	return (
		<div className='header'>
			<h1>CV Creator</h1>
			<div className='inputMode'>
				{mode === 'direct' ? (
					<>
						<button
							id='direct'
							className='activeInputMode'
							onClick={changeMode}
						>
							Direct Edit
						</button>
						<button id='formPreview' onClick={changeMode}>
							{'Form & Preview'}
						</button>
					</>
				) : (
					<>
						<button id='direct' onClick={changeMode}>
							Direct Edit
						</button>
						<button
							id='formPreview'
							className='activeInputMode'
							onClick={changeMode}
						>
							{'Form & Preview'}
						</button>
					</>
				)}
			</div>
			<div className='CVcontrols'>
				<button id='save' onClick={saveData}>
					Save
				</button>
				<button id='clear' onClick={clearData}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default Header;
