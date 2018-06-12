import React, { Fragment } from "react";

import {
	Route,
	Switch,
} from "react-router-dom";

import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";

import Add from "./components/Articles/Add";

import Articles from "./containers/Articles/Articles";
import Article from "./containers/Articles/Article";
import Edit from "./containers/Articles/Edit";
import Tags from "./containers/Articles/Tags";

const App = () => (
	<Fragment>
		{ /* header should show on all pages */ }
		<Header subtitle="Very insightful">My Blog</Header>

		{ /* route switch, to handle 404s */ }
		<Switch>
			{ /* the articles list */ }
			<Route exact path="/" component={ Articles } />

			{ /* show the add form */ }
			<Route exact path="/articles/add" component={ Add } />

			{ /* show the edit form */ }
			<Route exact path="/articles/:id/edit" render={ ({ match }) => (
					<Edit id={ +match.params.id } />
			)} />

			{ /* show an individual article */ }
			<Route exact path="/articles/:id" render={ ({ match }) => (
					<Article id={ +match.params.id } />
			)} />

			{ /* show tagged articles */ }
			<Route exact path="/tags/:tag" render={ ({ match }) => (
					<Tags tag={ match.params.tag } />
			)} />

			{ /* 404 page */}
			<Route component={ FourOhFour } />
		</Switch>

	</Fragment>
);

export default App;
