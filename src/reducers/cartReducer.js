import { 
	ADD_TO_CART, GET_LOCAL_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_COUNT
} from '../constants.js';

const initialCartState = {
	// cartItems state is an array of products in cart with additional key of "count"
	cartItems: []
}

const cartReducer = (state=initialCartState, action) => {
	switch(action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItems: action.payload
			}	
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: action.payload
			}	
		case UPDATE_PRODUCT_COUNT:
			return {
				...state,
				cartItems: action.payload
			}				
		case GET_LOCAL_CART:
			return {
				...state,
				cartItems: action.payload
			}	
		default: 
			return state; 
	}	
}

export default cartReducer;