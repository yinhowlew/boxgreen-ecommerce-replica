import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'gotham-fonts';
import 'gotham-fonts/css/gotham-rounded.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const logger = createLogger();

const store = createStore(
    rootReducer, applyMiddleware(thunkMiddleware, logger)
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</Provider>	
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
