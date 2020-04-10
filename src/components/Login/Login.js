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



