import React from 'react';
import './errorpage.css';

const ErrorPage = () => {

	return (
		<div className='error-page-container'>
			<img alt='error' src='https://d151f3rn0x6eid.cloudfront.net/assets/fail-squirrel-2ace63faff54aa29cbe492beaf12f91d33fd6cbff379761e75cee625394f8d36.png' />
			<h2>Oops...something happened!</h2>
			<h3> The page you were looking for doesn't exist.</h3>
			<h3> You may have mistyped the address or the page may have moved </h3>
			<a className="btn btn-primary btn-lg" href="/shop">start adding snacks</a>
		</div>	
	);
}

export default ErrorPage;

