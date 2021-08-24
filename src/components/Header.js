function Header(props) {
	return (
		<div className='header'>
			<h1>CV Creator</h1>
			<div className='inputMode'>
				{props.inputMode === 'direct' ? (
					<>
						<button
							id='direct'
							className='activeInputMode'
							onClick={props.changeInputMode}
						>
							Direct Edit
						</button>
						<button
							id='formPreview'
							onClick={props.changeInputMode}
						>
							{'Form & Preview'}
						</button>
					</>
				) : (
					<>
						<button id='direct' onClick={props.changeInputMode}>
							Direct Edit
						</button>
						<button
							id='formPreview'
							className='activeInputMode'
							onClick={props.changeInputMode}
						>
							{'Form & Preview'}
						</button>
					</>
				)}
			</div>
			<div className='CVcontrols'>
				<button id='save' onClick={props.saveData}>
					Save
				</button>
				<button id='clear' onClick={props.clearData}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default Header;
