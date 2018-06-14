import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from './data/reducer'
import initial from './data/initial'

// import the App component
import App from "./App";

// react-redux
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer, 
	initial, 
	composeEnhancers(applyMiddleware(thunk))
);

// wrap Router with Provider
// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root"),
);
