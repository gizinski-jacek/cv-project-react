import { nanoid } from 'nanoid';
import placeholderPhoto from '../Assets/placeholder-photo.jpeg';

const emptyCV = {
	personal: {
		firstName: '',
		lastName: '',
		title: '',
		photo: placeholderPhoto,
		birth: '',
		address: '',
		phone: '',
		email: '',
		description: '',
	},
	experience: [
		{
			id: nanoid(),
			company: '',
			position: '',
			city: '',
			workStart: '',
			workEnd: '',
		},
	],
	education: [
		{
			id: nanoid(),
			university: '',
			uniCity: '',
			degree: '',
			subject: '',
			uniStart: '',
			uniEnd: '',
		},
	],
};

export default emptyCV;
