import React from "react";
import { Link } from "react-router-dom";

// a simple header component
// includes an Add Article link
const Header = ({ children, subtitle }) => (
	<header className='jumbotron'>
		<h1 className='display-4'>
			<Link to="/">{ children }</Link>
			{ " " }
			{ subtitle ? <p className='lead'>{ subtitle }</p> : null }

			<aside className="float-right">
				<Link to="/articles/add" className="btn btn-primary">Add Article</Link>
			</aside>
			<hr className="my-4" />
		</h1>
	</header>
);

export default Header;
