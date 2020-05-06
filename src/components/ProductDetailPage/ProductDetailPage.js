import React, { useState, useEffect } from 'react';
import './productdetailpage.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";
import ErrorPage from "../ErrorPage/ErrorPage"
 
const ProductDetailPage = ({ match }) => {
	// get db and update product objects
	const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
    }, [dispatch]);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
 	 window.scrollTo(0, 0)
	}, []);

	//  the component receives match (and location) props from Route component
	const productId = Number(match.params.id);
	const allProducts = useSelector(state => state.productReducer.products);
    // matching match.params.id (the id entered at url) with the total product at our state	
    // product is our product object of interest here	
	const product = allProducts[productId - 1];
	const cartItems = useSelector(state => state.cartReducer.cartItems);

	// local state used for setting className for thumbnail/small image
    const [activeThumbnail, setActiveThumbnail] = useState(1);

    // temporary until we map out images..
    const big_1 = `${process.env.PUBLIC_URL}/products/details/5-large.jpg`
    const big_2 = `${process.env.PUBLIC_URL}/products/details/3-large.jpg`
    const big_3 = `${process.env.PUBLIC_URL}/products/details/1-large.jpg`

    // local state for setting active large image
    const [activeImage, setActiveImage] = useState(big_1);

// for RECOMMENDATION
    // randomise 3 numbers for product ids and return an array 
    const generateRandomRecommendation = () => {
    	let randomNumberList = [];

    	while (randomNumberList.length < 3) {
   			let x = Math.floor((Math.random() * 12) + 1); //generate random between 1 to 12	  
     		if (x !== productId && randomNumberList.includes(x) === false) { //excludes the current product, and no repeat
    			randomNumberList.push(x);
    		}  			  		
    	}
    	return randomNumberList  //an array of 3 numbers
    }	

    // local state that executes above function and save the array of 3 random no.
	const [recommendationState, setRecommendationState] = useState([]);
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setRecommendationState(generateRandomRecommendation()), [])      
    // now recommendationState state has our array of 3 random numbers, which is generated on componentDidMount

    //filter from allProducrs into our array of 3 random product objects
    const recommendationList = allProducts.filter(
            a => 
            (a.id === recommendationState[0]) ||
            (a.id === recommendationState[1]) ||
            (a.id === recommendationState[2])
    )
// =========

    // mapping the array into UI
    const recommendationItems = recommendationList.map(product => (
		<div className='card recommendation-items' key={product.id}>
		    <Link to={`/shop/product/${product.id}`}>
                <img
                    src={`${process.env.PUBLIC_URL}/products/${product.id}.jpg`} 
                    alt="test" 
                />
            </Link> 
            <p className='short-desc'>{product.short_desc}</p>
            <h4 className='listing-price'>{`$${product.price.toFixed(2)}`}</h4>
            <button 
                onClick={() => dispatch(allActions.cartActions.addToCart(cartItems, product))}
                className="btn btn-primary btn-shop">
                <p>add to cart</p>
            </button>       
		</div>
    ))

	return (
		product === undefined
		?
		<ErrorPage />
		:	
		<div className='detail-page-container'> 
			<section className='detail-intro-section-container'>
				<div className='small-image-section'>
	                <img
	                	className={activeThumbnail === 1 ? 'active-thumbnail' : 'not-active-thumbnail'}
	                    onClick={() => {
	                    	setActiveThumbnail(1);
	                    	setActiveImage(big_1);
	                    }}
	                    src={`${process.env.PUBLIC_URL}/products/details/5-small.jpg`} 
	                    alt="small-detail" 
	                />		
	                <img
	                	className={activeThumbnail === 2 ? 'active-thumbnail' : 'not-active-thumbnail'}
	                    onClick={() => {
	                    	setActiveThumbnail(2);
	                    	setActiveImage(big_2);
	                    }}
	                    src={`${process.env.PUBLIC_URL}/products/details/3-small.jpg`} 
	                    alt="small-detail" 
	                />		
	                <img
	                	className={activeThumbnail === 3 ? 'active-thumbnail' : 'not-active-thumbnail'}
	                    onClick={() => {
	                    	setActiveThumbnail(3);
	                    	setActiveImage(big_3);
	                    }}
	                    src={`${process.env.PUBLIC_URL}/products/details/1-small.jpg`} 
	                    alt="small-detail" 
	                />			                	                				
				</div>
				<div className='large-image-section'>
	                <img
	                    src={activeImage} 
	                    alt="large-detail" 
	                />					
				</div>
				<div className='detail-cta-section'>
					{product.title}
					<i className="fas fa-utensils"></i>
					<p id="detail_short_desc">{product.short_desc}</p>
					<h4>
						{`$${product.price.toFixed(2)}`}
					</h4>	
					<button 
		                onClick={() => dispatch(allActions.cartActions.addToCart(cartItems, product))}
		                className="btn btn-primary btn-shop">
		                <p>add to cart</p>
            		</button>       
				</div>				
			</section>

			<section className='detail-description-section-container'>
				<div className='detail-description-section'>
					<div className="description-header-bar">
						description
					</div>
					<div className='description-body'>
						<h3>about snack</h3>
						<div>{product.description.split('\n').map(c => {
			                   return ( <p  key={c}> {c} </p>) 
			                   }) // we need unique key for map, but we have none, so this is a hack
			               }
			            </div>
						<h3>our ingredient consists of</h3>
						<p>{product.ingredient.join(", ")}</p>
					</div>				
				</div>
			</section>

			<section className='recommendation-section-container'>
				<div className='recommendation-section'>
					<h1>you might also like</h1>
					<div className='recommendation-items-container'>
					{recommendationItems}
					</div>
				</div>
			</section>		

		</div>

	)
}

export default ProductDetailPage;