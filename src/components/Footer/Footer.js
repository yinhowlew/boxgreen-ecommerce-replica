import React from 'react';
import './footer.css';


const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="newsletter-section">
				<h2>join our newsletter</h2>
				<div className="subscribe-container">
					<input
						type='email'
						name='email'
						id='email'
						className='form-control subscribe-input'
						placeholder='Your email address'
						required='required'
					>
					</input>
					<button className="btn btn-primary btn-cart">
						subscribe
					</button>
				</div>				
			</div>

			<div className="footer-link-section">
				<div className="each-footer-link-list">
					<h2>get started</h2>
					<ul>
						<li>subscribe</li>
						<li>shop</li>
						<li>gift boxes</li>
						<li>gift vouchers</li>
					</ul>
				</div>
				<div className="each-footer-link-list">
					<h2>office</h2>
					<ul>
						<li>subscribe</li>
						<li>shop</li>
						<li>gift boxes</li>
						<li>gift vouchers</li>
					</ul>
				</div>
				<div className="each-footer-link-list">
					<h2>about</h2>
					<ul>
						<li>subscribe</li>
						<li>shop</li>
						<li>gift boxes</li>
						<li>gift vouchers</li>
					</ul>
				</div>
				<div className="each-footer-link-list">
					<h2>get in touch</h2>
					<ul>
						<li>subscribe</li>
						<li>shop</li>
						<li>gift boxes</li>
						<li>gift vouchers</li>
					</ul>
				</div>	
				<div className="each-footer-link-list">
					<h2>check out our nuts</h2>
					<div className='social-media-icons'>
						<img src='/images/footer/fb-icon.png' alt='icon' />
						<img src='/images/footer/instagram-icon.png' alt='icon' />
						<img src='/images/footer/youtube-icon.png' alt='icon' />
					</div>
					<div>
						<img className='cert-icon-1' src='/images/footer/cert-icon-1.png' alt='icon' />
						<img className='cert-icon-2'src='/images/footer/cert-icon.png' alt='icon' />
					</div>					
				</div>																
			</div>	

			<div className="mobile-footer-link-section">
				<div className="mobile-social-media-section">
					<img src='/images/footer/fb-icon.png' alt='icon' />
					<img src='/images/footer/instagram-icon.png' alt='icon' />
					<img src='/images/footer/youtube-icon.png' alt='icon' />
				</div>
				<ul className="mobile-footer-link-list">
					<li>our story</li>
					<li>office snack</li>
					<li>contact</li>
					<li>faq</li>
					<li>terms</li>
					<li>privacy</li>
				</ul>
			</div>

			<div className="disclaimer-section">
				<div className="disclaimer-wrap">
					<h4>disclaimer: </h4>				
					<p>this is an application built solely for author's learning and programming practice purpose. strictly not for distribution or any commercial use.</p>
					<p>copywriting, design, product direction etc are copied taken from boxgreen.co, with slight creative liberty taken by the author.</p>
					<p>copyright and credits belongs to the good folks of boxgreen pte ltd (a healthy snack delivery startup based in singapore), while all imperfections and errors are mine alone.</p>
					<p>© boxgreen pte ltd </p>
				</div>
			</div>								
		</footer>
	)
}

export default Footer;

