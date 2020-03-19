import React from 'react';
import './cartpage.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

 
const CartPage = () => {
	//maybe use global state instead
	//change a tag to Link
	// // eslint-disable-next-line	
	// const [cartIsEmpty, setCartIsEmpty] = useState(false);

	const cartItems = useSelector(state => state.cartReducer.cartItems);
	const dispatch = useDispatch();
	
	const cartQuantity = cartItems.reduce((acc,item) => acc + item.count, 0);
	const totalPrice = cartItems.reduce((acc,item) => acc + (item.count * item.price), 0);


	return (
		<section className="cart-page-container">
			<div className="cart-page-left-container">
			{cartItems.length === 0 
				? 
				<div className="empty-cart-container">
					<img alt="empty-cart" 
					src={`${process.env.PUBLIC_URL}/images/empty-cart.png`}
					/ >
					<p>oops, your cart is empty</p>
	     			<a className="btn btn-primary btn-lg" href={`${process.env.PUBLIC_URL}/shop`}>start adding snacks</a>
				</div> 
				:
				<div className="full-cart-container">
					<h3>Shopping Cart</h3>
					<div className="cart-item-list">
						{cartItems.map(item => (
							<div className="cart-individual-item" key={item.id}>
								<img 
									alt={item.title}
									src={`${process.env.PUBLIC_URL}/products/${item.id}.jpg`} 
								/ >
								<div className="cart-individual-item-title">
									<p>{item.title}</p>
								</div>
								<input 
									onChange={(event) => dispatch(allActions.cartActions.updateProductCount(cartItems, item, event.target.value))}
									className="form-control line-item-quantity"
									min="1" type="number" value={item.count}>
								</input>
								<p>{`$${(item.count * item.price).toFixed(2)}`}</p>
								<div className="remove-item-from-cart">
									<button
									onClick={() => dispatch(allActions.cartActions.removeFromCart(cartItems, item))}
									>X</button>
									<p
									onClick={() => dispatch(allActions.cartActions.removeFromCart(cartItems, item))}
									>remove</p>
								</div>	
							</div>
							))
						}
					</div>
				</div>
			}
			</div>	

			<div className="cart-page-right-container">
				<h2>total</h2>
				<hr />
				<div className="subtotal-section">
					{`subtotal (${cartQuantity} items) $${totalPrice.toFixed(2)}`}
				</div>
				<hr />
				<div className="total-section">
					{`total $${totalPrice.toFixed(2)}`}
				</div>
				<hr />
				<div className="cart-buttons-section">
					<a className="btn btn-primary btn-checkout" href={`${process.env.PUBLIC_URL}/shop`}>subscriber login</a>	
					<a className="btn btn-primary btn-checkout btn-checkout-2" href={`${process.env.PUBLIC_URL}/shop`}>checkout as guest</a>
				</div>
				<p className="free-shipping"> free shipping if you spend $30 and above!</p>	
				<div className="coupon-container">
					<input type="search" placeholder="Coupon code">
					</input>
					<button>apply</button>
				</div>			
			</div>				
		</section>
	)
}

export default CartPage;
