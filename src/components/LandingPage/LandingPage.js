import React from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
	return (
		<section>
			<div className='hero-container'>
	     		<div className='cta-container'>
	     			<img 
	     				src="https://d151f3rn0x6eid.cloudfront.net/assets/index/hero/better-snacking-5faecbbba8af02192f66281be96bc68470e7b68c3e4a6d0170ba9ba82b0ee6dc.png"
	     				alt="cta" 
	     			/>
	     			<div className='cta-text-container'>
	     				<i className="fas fa-tag fa-3x"></i>
		     			<div className='cta-text'>
		     				<p>have a special code?</p>
		     				<p>enter it here</p>
		     			</div>
	     			</div>
	     			<Link className="btn btn-primary btn-lg" to="/shop">start adding snacks</Link>
	     			<div>by continuing, you agree to our terms and privacy policy.
	     			</div>     			
	     	 	</div>  	
			</div>

			<div className='how-it-works-container'>
				<h3>how it works</h3>
				<div className='how-it-works-steps'>
					<div className='each-how-it-works-step'>
						<img src={`${process.env.PUBLIC_URL}/images/how-it-works-1.png`} alt='how-it-works' />
						<p className='special-p-tag'>choose</p>
						<p>fill your pantry with over 50 deliciously wholesome options</p>
					</div>
					<div className='each-how-it-works-step'>
						<img src={`${process.env.PUBLIC_URL}/images/how-it-works-2.png`} alt='how-it-works' />
						<p className='special-p-tag'>start a plan</p>
						<p>choose how often you would like to receive a box of 12 snack packs (6 varieties x 2 snack pack)</p>						
					</div>
					<div className='each-how-it-works-step'>
						<img src={`${process.env.PUBLIC_URL}/images/how-it-works-3.png`} alt='how-it-works' />
						<p className='special-p-tag'>sit back and snack</p>
						<p>enjoy your snacks regularly as part of a better diet!</p>						
					</div>										
				</div>
			</div>

			<div className='banner-2'>
				<div className='banner-overlay'>
					<img alt="variety" src="https://d151f3rn0x6eid.cloudfront.net/assets/index/callout/variety-6990f4654e5bda5c370a519f49f56a2b2ef6291de160bd247a743384b6daed66.png" />
					<h4>
						SAVOURY or sweet?
						<br />
						Salted or UNFLAVORED?
						<br />
						we've got your snacking
						<br />
						needs covered
					</h4>
					<Link className="btn btn-primary btn-lg" to="/shop">start adding snacks</Link>
				</div>
			</div>

			<div className='banner-3'>
				<div className='banner-overlay'>
				</div>
			</div>		

			<div className='banner-4' id='do-good'>
				<div className='banner-4-mini-container'>
					<div className='banner-overlay-4'>
						<img alt="variety" src="https://d151f3rn0x6eid.cloudfront.net/assets/index/one-box-one-meal-3f04ad60b65d5ccc334a6dd27553cc0a8b5afa5ea981725573cf4809a4e18914.png" />
						<h4>
							for every box sold, a portion of the proceeds will go to help provide meals for the less privileged
						</h4>
						<Link className="btn btn-primary btn-lg" to="/shop">start adding snacks</Link>
					</div>
				</div>	
			</div>					
		</section>
	)
}

export default LandingPage;



