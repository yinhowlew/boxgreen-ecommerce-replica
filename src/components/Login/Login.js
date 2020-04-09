import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";
import './login.css';
// import * as firebase from 'firebase/app';
// import "firebase/auth";
// import "firebase/firestore";
// import * as firebaseui from 'firebaseui';



//4:18  auth listener
// 7:02  enter value and onchange for inpiu?

const Login = () => {

 //    const userEmail = useSelector(state => state.userReducer.email);
	// const userPassword = useSelector(state => state.userReducer.password);
	const user = useSelector(state => state.userReducer.user);
	const alert = useSelector(state => state.alertsReducer.alert);

	const dispatch = useDispatch();

	if (user) {
		return(<Redirect to="/shop" />) 
	} 
	
	return (
		<div className='login-page'>
			<h3>Login</h3>
			<p>Enjoy members-only promotions and deals!</p>	
			<div className="form-container">
			  <div className="form-group">
			    {/*<label htmlFor="inputemail">Email address</label>*/}
			    <input type="email" 
			    	// onChange={(e) => dispatch(allActions.userActions.onEmailChange(e))}
			    	className="form-control form-width" 
			    	id="inputemail" aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  <div className="form-group">
			    {/*<label htmlFor="inputpassword">Password</label>*/}
			    <input 
			    	// onChange={(e) => dispatch(allActions.userActions.onPasswordChange(e))}
			    	type="password" className="form-control form-width" 
			    	id="inputpassword" placeholder="Password" />
			  </div>
			  <button 
			  	className="btn btn-primary btn-cart btn-login"
			  	onClick={() => dispatch(allActions.userActions.userLoginSubmit())} type="submit">Login</button>

		      {alert &&
		      <div className="alert alert-warning alert-dismissible fade show" role="alert">
			    {alert}
			    <button type="button" className="close" data-dismiss="alert" aria-label="Close"
			      onClick={() => dispatch(allActions.userActions.closeAlert())}>
			      <span aria-hidden="true">&times;</span>
			    </button>
			  </div>	
			  }

			  <div className="small-link"> Forgot Password</div>
			  <Link to="/signup" className="small-link">I am a new user. Sign me up</Link>		
			</div>
		</div>
	);
}

export default Login;



// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABZ0mHtd0VFKb-lEZleDc7Pet91AYPf-U",
//   authDomain: "boxgreen.firebaseapp.com",
//   databaseURL: "https://boxgreen.firebaseio.com",  
//   projectId: "boxgreen",
// };

// firebase.initializeApp(firebaseConfig);


// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// // ui.start('#firebaseui-auth-container', {
// //   signInOptions: [
// //   	{
// //      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
// //      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
// //  	}
// //   ]
// // // Other config options...
// // });

// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '/',  // or `${process.env.PUBLIC_URL}``
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Terms of service url.
//   tosUrl: '<your-tos-url>',
//   // Privacy policy url.
//   privacyPolicyUrl: '<your-privacy-policy-url>'
// };

// ui.start('#firebaseui-auth-container', uiConfig);

// const Login = () => {
// 	return (
// 		<div>
// 			<h2>Login Page</h2>	
// 			<div classNameName='firebasetest'>
// 				<h1>Welcome to My Awesome App</h1>
// 				<div id="firebaseui-auth-container"></div>
// 				<div id="loader">Loading...</div>
// 			</div>
// 		</div>	
// 	);
// }


