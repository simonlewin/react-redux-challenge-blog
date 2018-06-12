import React, { Fragment } from "react";

import { Link } from "react-router-dom";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
	<Fragment>
		{ tags.map((tag, i) => (
			<Link key={ i } to={ "/tags/" + tag } className="label label-primary">
				{ tag }
			</Link>
		))}
	</Fragment>
);

export default Tags;
