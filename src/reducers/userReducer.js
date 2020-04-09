import { 
	SET_USER_AUTH, READ_PROFILE
} from '../constants.js';

const initialUserState = {
	user: null,
	name: null,
	email: null,
	phone: null,
}

const userReducer = (state=initialUserState, action) => {
	switch(action.type) {
		case SET_USER_AUTH:
			return {
				...state,
				user: action.payload
			}		
		case READ_PROFILE:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				phone: action.payload.phone
			}													
		default: 
			return state; 
	}	
}

export default userReducer;