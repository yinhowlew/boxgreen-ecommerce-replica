import { 
	FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED, FILTER_PRODUCTS_BY_ALL, SEARCH_PRODUCTS, SORT_PRODUCTS
} from '../constants.js';

// to remove below later...
// import { predata } from './hack-data.js';

const initialState = {
	// products: predata,
	products: [],
	filteredProducts: [],
	price: "",
	isLoading: false,
	fetchError: ''
}
 
const productReducer = (state=initialState, action) => {
	switch(action.type) {
		case FETCH_PRODUCTS_PENDING:   
			return  {
				...state,
				isLoading: true,
				fetchError: ''
			}
		case FETCH_PRODUCTS_SUCCESS:   
			return  {
				...state,
				products: action.payload,
				filteredProducts: action.payload,
				isLoading: false
			}
		case FETCH_PRODUCTS_FAILED:   
			return  {
				...state,
				fetchError: action.payload,
				isLoading: false
			}						
		case FILTER_PRODUCTS_BY_ALL:   
			return  {
				...state,
				filteredProducts: action.payload.filteredProducts,
				price: action.payload.price
			}		
		case SEARCH_PRODUCTS:   
			return  {
				...state,
				filteredProducts: action.payload
			}					
		case SORT_PRODUCTS:   
			return  {
				...state,
				price: action.payload.price,
				filteredProducts: action.payload.filteredProducts
			}		
		default: 
			return state; 
	}	
}

export default productReducer;