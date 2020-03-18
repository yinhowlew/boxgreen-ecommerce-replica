import React from 'react';
import './shopbanner.css';
import Slider from 'infinite-react-carousel';

const dotsStyle = (dots) => <ul style={{ 
	display: 'flex',
	position: 'absolute', 
	top: "470px",
	// margin: 'auto',
	"justifyContent": "center",
	"zIndex": "1",
}}>{dots}</ul>


const ShopBanner = () => {
	return (
		<Slider dots duration={Number(100)} appendDots={dotsStyle} className="slider-container">
			<div>
				<img 
		            src={`${process.env.PUBLIC_URL}/images/banner-1.jpg`} 
		            alt="banner_1"
                />
            </div>
            <div>
				<img 
		            src={`${process.env.PUBLIC_URL}/images/banner-2.jpg`} 
		            alt="banner_2"
                />	
            </div>    						
		</Slider>
	)
}

export default ShopBanner;