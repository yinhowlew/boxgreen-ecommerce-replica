import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";
import './profile.css';
// import firebase from '../../config/Fire';


const Profile = () => {

	const user = useSelector(state => state.userReducer.user);
	const name = useSelector(state => state.userReducer.name);
	const email = useSelector(state => state.userReducer.email);
	const phone = useSelector(state => state.userReducer.phone);	
	const alert = useSelector(state => state.alertsReducer.alert);	
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(allActions.userActions.getProfile())
	})  

	if (!user) {
		return(<Redirect to="/shop" />) 
	} 

	return (
		<div className='login-page'>
			<h3>Profile</h3>
			<p>Update your profile for fun</p>
			<div className="form-container">
			  <div className='profile-email'>Your login email: {email} </div>	
			  <div className="form-group">
			    <label htmlFor="inputname">Name</label>
			    <input 
			    	type="inputname" className="form-control form-width" 
			    	id="profilename" placeholder={name} />
			  </div>			
			  <div className="form-group">
			  	<label htmlFor="inputphone">Phone</label>
			    <input 
			    	type="phonenumber" className="form-control form-width" 
			    	id="profilephone" placeholder={phone} />
			  </div>				    
			  <button
			  	className="btn btn-primary btn-cart btn-signup" 
			  	onClick={() => dispatch(allActions.userActions.updateProfile())} type="submit"
			  >Update</button>	

		      {alert &&
		      <div className="alert alert-warning alert-dismissible fade show" role="alert">
			    {alert}
			    <button type="button" className="close" data-dismiss="alert" aria-label="Close"
			      onClick={() => dispatch(allActions.userActions.closeAlert())}>  
			      <span aria-hidden="true">&times;</span>
			    </button>
			  </div>	
			  }			  
			</div>

		</div>
	);
}

export default Profile;




