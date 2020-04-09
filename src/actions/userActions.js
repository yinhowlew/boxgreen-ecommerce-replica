import { 
	SET_USER_AUTH, ERROR_MESSAGE, CLOSE_ALERT, READ_PROFILE
} from '../constants.js';
import firebase from '../config/Fire';


const userSignupSubmit = () => (dispatch) => {
      const email = document.getElementById('inputemail').value;
      const password = document.getElementById('inputpassword').value;
      const name = document.getElementById('inputname').value;
      const phone = document.getElementById('inputphone').value;
      const tos = document.getElementById('tos-privacy-checkbox').checked;

      if (email.length < 4) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid email"
		})	
      }
      if (password.length < 4) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a longer password"
		})	
      }
      if (name.length < 1) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid name"
		})	
      }
      if (phone.length < 4) {
        return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid phone number"
		})	
      }    
      if (!tos) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please accept Terms and Privacy to proceed"
		})	
      }        
      // Create user with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password)
      // below, we are updating Firestore DB, and also updating Authentication profile so that we can get displayName during auth.listener
      .then(function(result) {
      	firebase.firestore().collection('users').doc(result.user.uid).set({
      		email: email,
      		name: name,
      		phone: phone,
      	});
      	return result.user.updateProfile({
      		displayName: name,
      		phoneNumber: phone
      	})      	
      })      
      .then(alert("sign up success yay!"))
      // below is to set state so that we can redirect, because of some unknown reason, the authchange listener fires null even though there is user object
      .then(() => dispatch({
			type: SET_USER_AUTH,
			payload: name
		})) 
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
			return dispatch({
				type: ERROR_MESSAGE,
				payload: "Please enter a stronger password"
			})	
        } else {
        	return dispatch({
				type: ERROR_MESSAGE,
				payload: errorMessage
			})	
        }
      })
       // PREVIOUSLY.
      // .then(function() {
      // 	firebase.firestore().collection('users').add({
      // 		email: email,
      // 		name: name,
      // 		phone: phone,
      // 	})
      // })
      // .catch(function(error) {
      // 	console.log("db error", error)
      // })      
}

const userLoginSubmit = () => (dispatch) => {
  const email = document.getElementById('inputemail').value;
  const password = document.getElementById('inputpassword').value;
  // ensure previous user is logged out
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    if (email.length < 4) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid email"
		})	
    }
    if (password.length < 4) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid password"
		})	
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Password is wrong. Please try again."
		})	
      } else {
      	return dispatch({
			type: ERROR_MESSAGE,
			payload: errorMessage
		})	
      }
    });
  }
}

const setUserAuth = (value) => (dispatch) => {
	return dispatch({
		type: SET_USER_AUTH,
		payload: value
	})				
}


const logOutUser = () => (dispatch) => {
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  	return dispatch({
			type: ERROR_MESSAGE,
			payload: error
		})			
	});
}


const getProfile = () => (dispatch) => {
	// below is to handle error when profile page refresh when currentUser is null
	if (firebase.auth().currentUser === null) {
		return
	}

	const userUid = firebase.auth().currentUser.uid;

	firebase.firestore().collection('users').doc(userUid).get()
	.then(function(user) {
		if (user.exists) {
			const email = user.data().email;
			const name = user.data().name
			const phone = user.data().phone
			return dispatch({
				type: READ_PROFILE,
				payload: {
					email: email,
					name: name,
					phone: phone
				}
			})				
		} else {
			console.log("user doesn't exist")  //handle later
		}
	})

	//  previous method:
	// firebase.firestore().collection('users').where("email", "==", email).get()
	// .then(function(users) {
	// 	users.forEach(function(user) {
	// 		// console.log(user.data().email)
	// 		const email = user.data().email;
	// 		const name = user.data().name
	// 		const phone = user.data().phone
	// 		return dispatch({
	// 			type: READ_PROFILE,
	// 			payload: {
	// 				email: email,
	// 				name: name,
	// 				phone: phone
	// 			}
	// 		})			
	// 	})
	// })
	// .catch(function(error) {
	// 	console.log(error)
	// })
}

const updateProfile = () => (dispatch) => {
      const name = document.getElementById('profilename').value;
      const phone = document.getElementById('profilephone').value;

      if (name.length < 1) {
		return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid name"
		})	
      }
      if (phone.length < 4) {
        return dispatch({
			type: ERROR_MESSAGE,
			payload: "Please enter a valid phone number"
		})	
      }         
      
      const user = firebase.auth().currentUser;
      // updating profile in AUTH
      user.updateProfile({
      	displayName: name,
      	phoneNumber: phone
      })
      // updating Firestore DB
      .then(function() {
      	firebase.firestore().collection('users').doc(user.uid).update({
      		name: name,
      		phone: phone,
      	});	
      })      
      .then(alert("update success yay!"))
      // below is to set state so that we can redirect, because of some unknown reason, the authchange listener fires null even though there is user object
      .then(() => dispatch({
			type: SET_USER_AUTH,
			payload: name
		})) 
      .catch(function(error) {
        	return dispatch({
				type: ERROR_MESSAGE,
				payload: error.message
			})	
      })	
}


const closeAlert = () => (dispatch) => {
	return dispatch({
		type: CLOSE_ALERT,
		payload: null
	})
}


export default {
	userLoginSubmit, userSignupSubmit, setUserAuth, logOutUser, closeAlert, getProfile, updateProfile
}