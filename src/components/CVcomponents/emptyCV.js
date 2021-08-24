import { nanoid } from 'nanoid';
import placeholderPhoto from '../Assets/placeholder-photo.jpeg';

const emptyCV = {
	personal: {
		firstName: '',
		lastName: '',
		title: '',
		photo: placeholderPhoto,
		birth: '2020-01-01',
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
			workStart: '2000-01-01',
			workEnd: '2020-01-01',
		},
	],
	education: [
		{
			id: nanoid(),
			university: '',
			uniCity: '',
			degree: '',
			subject: '',
			uniStart: '2000-01-01',
			uniEnd: '2020-01-01',
		},
	],
};

export default emptyCV;
