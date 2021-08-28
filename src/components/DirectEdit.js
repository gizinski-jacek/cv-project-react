import { useState } from 'react';
import OverviewDirect from './DirectEditComponents/OverviewDirect';

function DirectEdit(props) {
	const [editing, setEditing] = useState({
		personal: false,
		experience: false,
		education: false,
	});

	function toggleEditsOff(e) {
		e.stopPropagation();
		setEditing({
			personal: false,
			experience: false,
			education: false,
		});
	}

	function toggleEdit(e, id) {
		e.stopPropagation();
		setEditing({
			personal: false,
			experience: false,
			education: false,
		});
		if (id) {
			const section = e.currentTarget.parentElement.className;
			setEditing((prevState) => ({
				...prevState,
				[section]: true,
			}));
		} else {
			if (
				e.currentTarget.className !== 'rightPanelCV' ||
				e.target.closest('div').className === 'description'
			)
				setEditing((prevState) => ({
					...prevState,
					personal: true,
				}));
		}
	}

	return (
		<div className='directEditMode' onClick={toggleEditsOff}>
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
