import { 
	FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED, FILTER_PRODUCTS_BY_ALL, SEARCH_PRODUCTS, SORT_PRODUCTS
} from '../constants.js';

const fetchProducts = () => (dispatch) => {
	  dispatch({ type: FETCH_PRODUCTS_PENDING })
      fetch(process.env.PUBLIC_URL + "/db.json")
      .then(res => res.json())
      .then(data => dispatch({
      	type: FETCH_PRODUCTS_SUCCESS,
      	payload: data.products
      }))
      .catch(error => dispatch({ type: FETCH_PRODUCTS_FAILED, payload: error.message}))
} 

const sortProducts = (filteredProducts, price) => (dispatch) => {
	const products = filteredProducts.slice();

	if (price !== "") {
        products.sort((a, b) =>
          price === "lowestprice"
            ? (a.price > b.price
	          ? 1
	          : -1)
            : (a.price < b.price
           	 ? 1
           	 : -1)
        );
      } else {
        products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }

	return dispatch({
		type: SORT_PRODUCTS,
		payload: {
			price: price,
			filteredProducts: products
		}
	})
}

const searchProducts = (text, products) => (dispatch) => {
	const filteredProducts = products.filter(a => {
		return a.description.toLowerCase().includes(text.toLowerCase());
	})	

	return dispatch({
		type: SEARCH_PRODUCTS,
		payload: filteredProducts
	})	
}

const filterProductsByAll = (products) => (dispatch) => {
	const promo = document.getElementById("promo").checked;
	const best = document.getElementById("best").checked;
	const peanut = document.getElementById("peanut").checked;
	const granola = document.getElementById("granola").checked;
	const cashew = document.getElementById("cashew").checked;
	const almond = document.getElementById("almond").checked;
	const cranberry = document.getElementById("cranberry").checked;
	const edamame = document.getElementById("edamame").checked;
	const peacan = document.getElementById("peacan").checked;
	// console.log("promo best",promo, best);

	//individual filter function: takes product array and return filtered or original
	const promoFilter = (products) => {
		if (promo) {
			return products.filter(a => a.promo === 1)
		}
		return products
	}
	const bestFilter = (products) => {
		if (best) {
			return products.filter(a => a.best === 1)
		}
		return products
	}	
	const peanutFilter = (products) => (
		peanut 
		?  products.filter(
            a => a.ingredient.indexOf("peanut") >= 0) 
		:  products
	)	
	const granolaFilter = (products) => (
		granola 
		?  products.filter(
            a => a.ingredient.indexOf("granola") >= 0) 
		:  products
	)	
	const cashewFilter = (products) => (
		cashew 
		?  products.filter(
            a => a.ingredient.indexOf("cashew") >= 0) 
		:  products
	)	
	const almondFilter = (products) => (
		almond 
		?  products.filter(
            a => a.ingredient.indexOf("almond") >= 0) 
		:  products
	)	
	const cranberryFilter = (products) => (
		cranberry 
		?  products.filter(
            a => a.ingredient.indexOf("cranberry") >= 0) 
		:  products
	)	
	const edamameFilter = (products) => (
		edamame
		?  products.filter(
            a => a.ingredient.indexOf("edamame") >= 0) 
		:  products
	)	
	const peacanFilter = (products) => (
		peacan
		?  products.filter(
            a => a.ingredient.indexOf("peacan") >= 0) 
		:  products
	)					
	//filter conditions chaining
	const filterLogic = (products) => {
		return peacanFilter(edamameFilter(cranberryFilter(almondFilter(cashewFilter(granolaFilter(peanutFilter(bestFilter(promoFilter(products)))))))))
	}

	return dispatch({
		type: FILTER_PRODUCTS_BY_ALL,
		payload: {
			price: "",   // this is to re-set price sort to default 
			filteredProducts: filterLogic(products)
		}
		
	})	
} 




export default {
	fetchProducts, filterProductsByAll, searchProducts, sortProducts
}