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
			const section = e.currentTarget.parentElement.className;
			setEditing((prevState) => ({
				...prevState,
				[section]: true,
			}));
		} else if (
			e.currentTarget.className !== 'rightPanelCV' ||
			e.target.closest('div').className === 'description'
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
