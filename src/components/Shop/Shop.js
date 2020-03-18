import React from 'react';
import './shop.css';
// import ShopBanner from '../ShopBanner/ShopBanner';
import ActionBar from '../ActionBar/ActionBar';
import Filter from '../Filter/Filter';
import ProductList from '../ProductList/ProductList';

const Shop = () => {
	return (
		<section>
			<div className="shop-hero-banner">
			</div>
			<div className="shop-container">
				<ActionBar />
				<div className="shop-container-2">
					<Filter />
					<ProductList />
				</div>
			</div>	
		</section>
	)
}

export default Shop;

// not gonna use ShopBanner and carousel..