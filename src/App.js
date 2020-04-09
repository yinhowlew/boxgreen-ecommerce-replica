import React, { useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import firebase from './config/Fire';
import allActions from './actions'
import NavBar from './components/NavBar/NavBar';
// import LandingPage from './components/LandingPage/LandingPage';
// import Shop from './components/Shop/Shop';
// import CartPage from './components/CartPage/CartPage';
// import ProductList from './components/ProductList/ProductList';
// import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import Footer from './components/Footer/Footer';
// import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.css';


const LandingPage = lazy(() => import('./components/LandingPage/LandingPage'));
const Shop = lazy(() => import('./components/Shop/Shop'));
const CartPage = lazy(() => import('./components/CartPage/CartPage'));
const ProductList = lazy(() => import('./components/ProductList/ProductList'));
const ProductDetailPage = lazy(() => import('./components/ProductDetailPage/ProductDetailPage'));
const ErrorPage = lazy(() => import('./components/ErrorPage/ErrorPage'));
const Login = lazy(() => import('./components/Login/Login'));
const Signup = lazy(() => import('./components/Signup/Signup'));
const Profile = lazy(() => import('./components/Profile/Profile'));

const App = () => {

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(allActions.userActions.setUserAuth(user.displayName))
      } else {
        dispatch(allActions.userActions.setUserAuth(null))
      }
    })
  }

  const dispatch = useDispatch();
  // let user = Fire.auth().currentUser;
  // const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      dispatch(allActions.cartActions.getLocalCart())
    }
    authListener()
  })  
        
  return (
    <div className='App'> 
      <NavBar />     
       <Suspense fallback={<div>Loading...</div>}>    
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/shop" component={Shop} exact />
            <Route path="/shop/cart" component={CartPage} />  
            <Route path="/shop/products" component={ProductList} />  
            <Route path="/shop/product/:id" component={ProductDetailPage} /> 
            <Route path="/login" component={Login} /> 
            <Route path="/signup" component={Signup} />  
            <Route path="/profile" component={Profile} />              
            <Route component={ErrorPage} />
            {/*
            <Route path="/login" component={user ? Shop : Login} /> 
            <Route path="/signup" component={user ? Shop : Signup} />                 
            <Redirect to="/" /> 
            */}     
          </Switch>
        </Suspense>             
      <Footer />      
    </div>
  );
}


export default App;


/* 
next:  

low-priority/unnecessary:
hometabisactive--> need to be global state? if click Back won't update
when page refresh, error state should set to null again so alert doesnt persist
(too much work) navbar and menu detailsdrop down like boxgreen: e.g. link to products;  what about lnk to products/promo? unnecessary?
navbar - make side menu in mobile?
what to do with stand-aline product page: https://www.boxgreen.co/shop/products
button on pressed is blue??
image animation of product details:  need to load all images then move them
shadow effect? box-shadow

LATER:
css optimisation?
generaal optimisation:  watch 116 to 121?
productlist: onclick, button has "added" text and animation
Testing 

PROBLEM:
1)  refactor filter algorithm
2)  router on dynamic routing of product, when refresh it doesn't fetch state

Issue summary on dynamic routing:
Issue:  
 if goes from product listing -> product details, it works. product state is fine.
 but when refresh or going the route directly, app fails to render
setup:  frontend only. CRA. react-router-dom. route/link in App, ProductList --> ProductDetailPage
immediate cause:  product state is empty on render, hence unable to display product.title, details, etc
troubleshooting -
1) using useEffect/componentDidMount to update product state (which works for ProductList page)
-- does not work.  product state is still empty when 
-- does not work even if used on App component, or ProductDetailsPage, or NavBar (which is recurring component)
2)  when I removed any use of product state in ProductDetailsPage, the page renders fine on direct visit. So the problem is narrowed down to the product state.
3)  as a hack, when I put the json at the initial state in the reducer, the page renders fine on direct visit.
4) essentially, the same process works for ProductList (fetching and update product state), but didn't work for ProductDetailPage??



LEARNING
1) use background image instead of an img element
2)  added script using fontawesome
3)  added bootstrap for buttons
4)  removed z-index; it prevents clicking?
5_  learned: line-height
6)  a {
  color: inherit;  // if you don't want it to change after being <a>
}
7)    flex-wrap: wrap  so that it will flow to multiple lines
8)     justify-content: space-evenly --> good for cards
9)   fixed NavBar with   
  width: 80%;
  justify-content: space-between;
  margin: auto;
  & an additional div layer wrapping it
10)  nice: in NavBar, used useState hook (since it's local state) to conditionally set className of subscription/shop tab!!
11)  stuck @ multi-condition filter. but SOLVED using filter function chaining in Action
12)  in arrow function, if using expression (e.g. IF), use () instead of {}
13)  before working on a page, draw and layout all the container/div/components
14)  use temporary background color to help w layout
15)  use reduce in navbar to tally count of cart items !
16) importing font
17)  fixed navbar tabswitcher using useEffect and window.location.href
18)  react-router creating dynamic:
<Route path="/shop/product/:id" component={ProductDetailPage} /> 
at ProductList component, in mapping, <Link to={`/shop/product/${product.id}`}>
but have issue if refresh/manual enter
at ProductDetail, 
const ProductDetailPage = ({ match }) => {
//  the component automatically receives match and location props from Route component
  let productId = Number(match.params.id);
19)  align-items, justify-content; align-self(on self);  if use margin:auto will screw up previous
20)  if 2 css properties are in conflict, the later one wins. e.g. margin:auto and margin-top
21)   onClick={() => setActiveThumbnail(1)}  must have () =>, else infinite render
22)  line-breaking when displaying long json string. put \n in json, then 
        <p>{product.description.split('\n').map(c => {
                     return ( <p> {c} </p>) 
                     })
                 }
         </p>
23)  random 3 recommendation of products in recommendation section. good logic practice.
24)  at recommendation, when we click to go into another product, the data loads but it doesn't scroll to top:  FIXED with ScrollToTop: https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
35)  dropdown menu without pushing the whole navbar:
          menu.style.display = 'block';
          menu.style.position = 'absolute';
          menu.style.zIndex = '3000';
36)  there is no onHover in React; instead, onMouseEnter and onMouseLeave
37)  scale animate:
  div {
    transition: transform 1s;
  }

  div:hover {
    transform: scale(2);
  }
38)  justify-content: space-around/space-between/flex-start is dope. align-item is flex-start/center; text-align is for text of children
or, margin: auto 
39)  DOM manipulation might not always work esp. if there's external stylesheet. Use states instead -> see Filter
40)  use conditional based on window.Innerwidth to define initial state => see Filter,  such that on mobile, dropdown of gradient is collapsed
41)  added errorpage for all routes with no destination;  and added errorpage in ProductDetail if product is undefined
42)  Textual form controls—like <input>s, <select>s, and <textarea>s—are styled with the .form-control class of Bootstrap. 
43)  code splitting: lazy/suspense
44)  unique problem after deploying to github pages, since the base url of the app is not the root.
this is fixed by:
- BrowserRouter basename={process.env.PUBLIC_URL}
- fixed all images to have process.env.PUBLIC_URL/ in front
- all <a> tag changed to <Link>
45)   for css styling of important component, if small and desperate, use important!
46)   re-render ShopBanner and Filter when window resize by adding event listener in useEffect hook
47)  Carousel component nuka-carousel is good; added autoPlay, wrapAround, and disabled prev/next buttons
also,  rendered mobile images based on window.innerWidth
48)  added maximum-scale=1 to fix form dropdown zoom in issue
49)  Terms / Privacy overlay - using Bootstrap Modal:
.overlay-modal {
  display: block  (toggle to none)
  position: fixed;
  background-color: rgba(0,0,0,0.7);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
}
50)   Firebase integration for authentication
51)   error message using bootstrap alert and state
52)   integration of Firebase's Firestore;  connect with authentication
53)  remember to add config file to gitignore
*/  

/*  INSTALLED
installed:  firebase 

Good:   nuka-carousel
https://reactjsexample.com/a-pure-reactjs-carousel-component/
https://github.com/FormidableLabs/nuka-carousel
so far so good

redux
react-redux
redux-logger
redux-thunk

added cute font from g font

installed npm i gotham-fonts
- at index.js:  import 'gotham-fonts/css/gotham-rounded.css';  (got the path from node module folder)
- at index.css,   font-family: 'Gotham Rounded', sans-serif; (got the name from css file)o

(UNINSTALLED) npm install infinite-react-carousel 
configurable here:  https://github.com/g787543/infinite-react-carousel

installed react-router-dom

added bootstrap for button styling

(UNINSTALLED) installed material-ui for testing
added roboto font which material-ui prefers
props for Button component: https://material-ui.com/api/button/

how to update style:
1) inline styling - style={{ width: '100%'}}
2)  use existing class (reference global class in link above) in app.css: important is specificity 
Button.MuiButton-containedPrimary {
  background-color: black;
}

installed eslint global
then on project: eslint --init
*/