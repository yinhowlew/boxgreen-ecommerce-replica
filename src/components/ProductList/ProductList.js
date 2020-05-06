import React, { useEffect } from 'react';
import './productlist.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";


const ProductList = ({ match }) => {

	const products = useSelector(state => state.productReducer.filteredProducts);
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    
	const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.productActions.fetchProducts())
    }, [dispatch])
        // eslint-disable-next-line react-hooks/exhaustive-deps

    const productItems = products.map(product => (
		<div className='card' key={product.id}>
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
		<div className='productlist-container'> 
			{productItems}
		</div>		
	)
}

export default ProductList;
       // <Route path={`${match.path}/:id`} component={ProductDetailPage} /> 
             // <Link to={`/shop/product/${product.id}`}>

/*
		<div className='productlist-container'> 
			<div className='card'>
			    <img 
                    src={`${process.env.PUBLIC_URL}/products/${product.id}.jpg`} 
                    alt="test" 
                />
                <p className='short-desc'>{product.short-description}</p>
                <h4 className='listing-price'>$28.00</h4>
                <a className="btn btn-primary btn-shop" href="/"><p>add to cart</p></a>
			</div>
		</div>				
			<div className='card'>
			    <img 
                    src={`${process.env.PUBLIC_URL}/products/2.jpg`} 
                    alt="test" 
                />
			</div>			
			<div className='card'>
			    <img 
                    src={`${process.env.PUBLIC_URL}/products/2.jpg`} 
                    alt="test" 
                />
			</div>	
		*/