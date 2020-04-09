import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";
import './signup.css';


const Signup = () => {

	const user = useSelector(state => state.userReducer.user);
	const alert = useSelector(state => state.alertsReducer.alert);	
	const dispatch = useDispatch();

	if (user) {
		return(<Redirect to="/shop" />) 
	} 

	const toggleTos = () => {
    	const tos = document.getElementById('tos-overlay');
	    tos.style.display === 'block'
	    ?
		tos.style.display = 'none'
		:
	    tos.style.display = 'block';	
	}
	const togglePrivacy = () => {
    	const privacy = document.getElementById('privacy-overlay');
	    privacy.style.display === 'block'
	    ?
		privacy.style.display = 'none'
		:
	    privacy.style.display = 'block';	
	}


	return (
		<div className='login-page'>
			<h3>Signup</h3>
			<p>Enjoy members-only promotions and deals!</p>
			<div className="form-container">
			  <div className="form-group">
			    <input type="email" 
			    	// onChange={(e) => dispatch(allActions.userActions.onEmailChange(e))}
			    	className="form-control form-width" 
			    	id="inputemail" aria-describedby="emailHelp" placeholder="Enter email" />
			    <small id="emailHelp" className="form-text text-muted">We'll never share your details.</small>
			  </div>
			  <div className="form-group">
			    <input 
			    	// onChange={(e) => dispatch(allActions.userActions.onPasswordChange(e))}
			    	type="password" className="form-control form-width" 
			    	id="inputpassword" placeholder="Password" />
			  </div>
			  <div className="form-group">
			    <input 
			    	// onChange={(e) => dispatch(allActions.userActions.onPasswordChange(e))}
			    	type="inputname" className="form-control form-width" 
			    	id="inputname" placeholder="Name" />
			  </div>			
			  <div className="form-group">
			    <input 
			    	// onChange={(e) => dispatch(allActions.userActions.onPasswordChange(e))}
			    	type="phonenumber" className="form-control form-width" 
			    	id="inputphone" placeholder="Phone Number" />
			  </div>				    
			  <div className="form-check">
			    <input type="checkbox" className="form-check-input" id="tos-privacy-checkbox" />
			    <label className="form-check-label" htmlFor="tos-privacy-checkbox">
			    	I agree to <span onClick={toggleTos}>Terms of Service</span> and <span onClick={togglePrivacy}>Privacy</span>
			    </label>
			  </div>
			  <button
			  	className="btn btn-primary btn-cart btn-signup" 
			  	onClick={() => dispatch(allActions.userActions.userSignupSubmit())} type="submit">Sign Up</button>	

		      {alert &&
		      <div className="alert alert-warning alert-dismissible fade show" role="alert">
			    {alert}
			    <button type="button" className="close" data-dismiss="alert" aria-label="Close"
			      onClick={() => dispatch(allActions.userActions.closeAlert())}>
			      <span aria-hidden="true">&times;</span>
			    </button>
			  </div>	
			  }

			  <Link className="small-link" to="/login">I already have an account. Go to Login.</Link>			  
			</div>

			<div id="tos-overlay" className='overlay-modal'>
				<div className='modal-container'>
					<div className='modal-title'>Terms of Services</div>
					<div className='modal-content'>
						<ol>
							<li>FIRST, AN IMPORTANT MESSAGE: PLEASE READ THESE TERMS AND CONDITIONS OF USE ("Terms", "Terms of Use", or "Agreement") CAREFULLY BEFORE USING THIS SITE, AS THEY AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS, INCLUDING, BUT NOT LIMITED TO, WAIVERS OF RIGHTS, LIMITATION OF LIABILITY, AND YOUR INDEMNITY TO US. THIS AGREEMENT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN COURTS OR JURY TRIALS, AND LIMITS THE REMEDIES AVAILABLE IN THE EVENT OF A DISPUTE.</li>
							<li>These Terms of Use describe the terms and conditions that govern your use of the current and future online and mobile websites, platforms, services, applications, and networks owned or operated by KADENZA, Inc. ("KADENZA"), including without limitation, gibberish, and/or for which KADENZA currently or in the future provides services and/or technology (the "Site" or "Sites"). You accept and agree to be bound by these Terms of Use when you use any of the Sites, without limitation, when you view or access content or videos on any of the Sites.</li>
							<li>The following terms apply to content submitted by users, and user conduct, on the Site's Interactive Areas</li>
							<li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
						</ol>
					</div>
					<div className='modal-footer'>
						<button 
						onClick={toggleTos}
						className='btn-close-modal'>Close</button>
					</div>
				</div>
			</div>
			<div id="privacy-overlay" className='overlay-modal'>
				<div className='modal-container'>
					<div className='modal-title'>Privacy Policies</div>
					<div className='modal-content'>
						<ol>
							<li>FIRST, AN IMPORTANT MESSAGE: PLEASE READ THESE TERMS AND CONDITIONS OF USE ("Terms", "Terms of Use", or "Agreement") CAREFULLY BEFORE USING THIS SITE, AS THEY AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS, INCLUDING, BUT NOT LIMITED TO, WAIVERS OF RIGHTS, LIMITATION OF LIABILITY, AND YOUR INDEMNITY TO US. THIS AGREEMENT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN COURTS OR JURY TRIALS, AND LIMITS THE REMEDIES AVAILABLE IN THE EVENT OF A DISPUTE.</li>
							<li>These Terms of Use describe the terms and conditions that govern your use of the current and future online and mobile websites, platforms, services, applications, and networks owned or operated by KADENZA, Inc. ("KADENZA"), including without limitation, gibberish, and/or for which KADENZA currently or in the future provides services and/or technology (the "Site" or "Sites"). You accept and agree to be bound by these Terms of Use when you use any of the Sites, without limitation, when you view or access content or videos on any of the Sites.</li>
							<li>The following terms apply to content submitted by users, and user conduct, on the Site's Interactive Areas</li>
							<li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
						</ol>
					</div>
					<div className='modal-footer'>
						<button 
						onClick={togglePrivacy}
						className='btn-close-modal'>Close</button>
					</div>
				</div>
			</div>	

		</div>
	);
}

export default Signup;




