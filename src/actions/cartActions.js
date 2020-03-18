import { 
	ADD_TO_CART, GET_LOCAL_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_COUNT
} from '../constants.js';

const addToCart = (cartList, product) => (dispatch) => {
	const cartItems = cartList.slice();
	let productAlreadyInCart = false;

	cartItems.forEach(cp => {
	if (cp.id === product.id) {
	  cp.count += 1;
	  productAlreadyInCart = true;
	}
	});

	if (!productAlreadyInCart) {
	// meaning pushing an object with properties of product and an additional property of count
	// into the array of objects, called cartItems
	cartItems.push({ ...product, count: 1 });
	}
	// localStorage is used so that if user refreshes the page, cart doesn't get refreshed
	localStorage.setItem("cartItems", JSON.stringify(cartItems));

	return dispatch({
		type: ADD_TO_CART,
		payload: cartItems
	})
}


const getLocalCart = () => (dispatch) => {
	return dispatch({
		type: GET_LOCAL_CART,
		payload: JSON.parse(localStorage.getItem("cartItems"))
	})
}


const removeFromCart = (cartlist, product) => (dispatch) => {
      // so the new cartItems will exclude the removed item
      const cartItems = cartlist.slice().filter(a => a.id !== product.id);
      // the new localStorage will have the new cartItems
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return dispatch({
      	type: REMOVE_FROM_CART,
      	payload: cartItems
      })
}

// cartlist is array [{}, {} ... ]
// product is product object {}
// count is event.target.value from onChange

const updateProductCount = (cartlist, product, new_count) => (dispatch) => {
	const count = Number(new_count);
	const cartItems = cartlist.slice();

	//if user selects 0, then remove from cart; else, update count 
	(count === 0) 
	?
	removeFromCart(cartItems, product)
	:
	cartItems.forEach(cp => {
	if (cp.id === product.id) {
	  cp.count = count;
	}
	});	

	localStorage.setItem("cartItems", JSON.stringify(cartItems));

	return dispatch({
		type: UPDATE_PRODUCT_COUNT,
		payload: cartItems
	})
}


export default {
	addToCart, getLocalCart, removeFromCart, updateProductCount
}