import { useState } from 'react';
import OverviewDirect from './DirectEditComponents/OverviewDirect';

function DirectEdit(props) {
	const [editing, setEditing] = useState({
		personal: false,
		experience: false,
		education: false,
	});

	function toggleAllEditsOff(e) {
		e.stopPropagation();
		if (e.target.className === 'directEditMode')
			setEditing({
				personal: false,
				experience: false,
				education: false,
			});
	}

	function toggleEdit(e, id) {
		e.stopPropagation();
		if (id) {
			const entry = e.currentTarget.parentElement.className;
			setEditing((prevState) => ({
				...prevState,
				[entry]: true,
			}));
		} else if (
			e.currentTarget.className !== 'rightPanelCV' ||
			e.target.closest('div').className === 'profile'
		) {
			setEditing((prevState) => ({
				...prevState,
				personal: true,
			}));
		}
	}

	return (
		<div className='directEditMode' onClick={toggleAllEditsOff}>
			<div className='overview'>
				<OverviewDirect
					innerRef={props.innerRef}
					{...props.data}
					{...props.dataHandlers}
					editing={editing}
					toggle={toggleEdit}
				/>
			</div>
		</div>
	);
}

export default DirectEdit;
