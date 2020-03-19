import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';

const NavBar = () => {

	const cartItems = useSelector(state => state.cartReducer.cartItems);

	const cartQuantity = cartItems.reduce((acc,item) => acc + item.count, 0);
	const totalPrice = cartItems.reduce((acc,item) => acc + (item.count * item.price), 0);

	const openMenu = () => {
		let menu = document.querySelector('.opened-menu-container');
	    if(menu.style.display === 'flex')
	    {
	        menu.style.display = 'none';
	    } else {
	        menu.style.display = 'flex';
	        // menu.style.flexDirection = 'column';
	        // menu.style.position = 'absolute';
	        // menu.style.zIndex = '3000';
	    }
	}

	// self-contained state that is not used any where
	const [homeTabIsActive, setHomeTabIsActive] = useState(true);
	
	// if user goes directly to /shop, this will ensure the tab is correct
	useEffect(() => {
		if (window.location.href.includes("/shop")) {
			setHomeTabIsActive(false);
		} else {
			setHomeTabIsActive(true);
		}
  	},[])  


	return (
		<header className='nav-bar'>
			<div className='nav-bar-1-bg'>		
				<div className='nav-bar-1'>
					<div className='tab-switcher'>
						<div 
							className={homeTabIsActive ? 'tab tab-selected' : 'tab'}
						>
							<Link 
							onClick={() => setHomeTabIsActive(true)}
							to="/" exact="true">subscription</Link></div>
						<div 
							className={homeTabIsActive ? 'tab' : 'tab tab-selected'}					
						>
							<Link 
							onClick={() => setHomeTabIsActive(false)}	
							to="/shop">shop</Link></div>
					</div>
					<div className='login-buttons'>
						<div className='tab'>redeem</div>
						<div className='tab'>login</div>			
					</div>												
				</div>
			</div>	
 
			<div className='nav-bar-2-bg'>	
				<div className='nav-bar-2'>
					<div className='nav-bar-2-left'>
						<Link 
								to="/" exact="true" 
								onClick={() => setHomeTabIsActive(true)}
						><img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} />
						</Link>	
						<ul>
							<li>
								<Link 
									to="/shop" exact="true" 
									onClick={() => setHomeTabIsActive(false)}
									onMouseEnter={openMenu} 
									onMouseLeave={openMenu} 
								>Snacks
									<div className="opened-menu-container">
										<i className="fas fa-caret-up caret-edit"></i>
										<div className="opened-menu">
											<div>Appetizers</div>
					                		<div>Entrees</div>
					               			<div>Breads</div>
					               			<div>Deserts</div>
					                		<div>Beverages</div>
										</div>
									</div>	
								</Link>
							</li>
							<li>
								<Link 
								to="/shop/product/1" exact="true" 
								onClick={() => setHomeTabIsActive(false)}
								>Hot</Link>
							</li>	
							<li>
								<Link 
								to="/shop" exact="true"
								onClick={() => setHomeTabIsActive(true)}
								>Treat Yourself</Link>
							</li>														
						</ul>
					</div>	
					<Link 
						to="/shop/cart" exact="true" 
						className="btn btn-primary btn-cart"
						onClick={() => setHomeTabIsActive(false)}	
					>
						<i className="fa fa-shopping-cart fa-style"></i> 
						<p>{`${cartQuantity} items`}</p>
						<p>{`($${totalPrice.toFixed(2)})`}</p>	
					</Link>			
				</div>

			</div>
		</header>	
	);
}

export default NavBar;

