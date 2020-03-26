import React, { useState, useEffect } from 'react';
import './shopbanner.css';
import Carousel from 'nuka-carousel';



const ShopBanner = () => {

	const [width, setWidth] = useState(window.innerWidth);
	// below adds eventlistener to resize event 
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return _ => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return (
		<div>
			{width > 600 
			?
			<Carousel className='slider-container' autoplay={true} wrapAround={true}>
				<img 
		            src={`${process.env.PUBLIC_URL}/images/banner-1.jpg`} 
		            alt="banner_1"
	            />
				<img 
		            src={`${process.env.PUBLIC_URL}/images/banner-2.jpg`} 
		            alt="banner_2"
	            />		
			</Carousel>
			:
			<Carousel className='slider-container'>
				<img 
		            src={`${process.env.PUBLIC_URL}/images/banner-1-mobile.jpg`} 
		            alt="banner_1"
	            />
				<img 
		            src={`${process.env.PUBLIC_URL}/images/banner-2-mobile.jpg`} 
		            alt="banner_2"
	            />		
			</Carousel>		
			}
		</div>
	)
}

export default ShopBanner;