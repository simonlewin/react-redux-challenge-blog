import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// redux
import { createStore } from "redux";

import reducer from './data/reducer'
import initial from './data/initial'

// import the App component
import App from "./App";

// react-redux
import { Provider } from "react-redux";

const store = createStore(
	reducer,
	initial,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

let articles = store.getState().articles;

// wrap Router with Provider
// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<App articles={ articles } />
		</Router>
	</Provider>,
	document.getElementById("root"),
);
