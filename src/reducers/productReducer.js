import { 
	FETCH_PRODUCTS, FILTER_PRODUCTS_BY_ALL, SEARCH_PRODUCTS, SORT_PRODUCTS
} from '../constants.js';

// to remove below later...
// import { predata } from './hack-data.js';

const initialState = {
	// products: predata,
	products: [],
	filteredProducts: [],
	price: ""
}

const productReducer = (state=initialState, action) => {
	switch(action.type) {
		case FETCH_PRODUCTS:   
			return  {
				...state,
				products: action.payload,
				filteredProducts: action.payload
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