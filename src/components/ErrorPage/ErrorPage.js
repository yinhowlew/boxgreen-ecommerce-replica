import React from 'react';
import './errorpage.css';

const ErrorPage = () => {

	return (
		<div className='error-page-container'>
			<img alt='error' src={`${process.env.PUBLIC_URL}/images/empty-cart.png`} />	
			<h2>Oops...something happened!</h2>
			<h3> The page you were looking for doesn't exist.</h3>
			<h3> You may have mistyped the address or the page may have moved </h3>
			<a className="btn btn-primary btn-lg" href={`${process.env.PUBLIC_URL}/shop`}>start adding snacks</a>
		</div>	
	);
}

export default ErrorPage;

