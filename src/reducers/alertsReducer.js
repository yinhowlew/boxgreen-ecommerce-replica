import { 
	ERROR_MESSAGE, CLOSE_ALERT
} from '../constants.js';

const initialUserState = {
	alert: null,
}

const alertsReducer = (state=initialUserState, action) => {
	switch(action.type) {
		case CLOSE_ALERT:
			return {
				...state,
				alert: action.payload
			}			
		case ERROR_MESSAGE:
			return {
				...state,
				alert: action.payload
			}											
		default: 
			return state; 
	}	
}

export default alertsReducer;