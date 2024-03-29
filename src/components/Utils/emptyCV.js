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
		profile: '',
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
			school: '',
			schoolCity: '',
			degree: '',
			subject: '',
			eduStart: '',
			eduEnd: '',
		},
	],
};

export default emptyCV;
