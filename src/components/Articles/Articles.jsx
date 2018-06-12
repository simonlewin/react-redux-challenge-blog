import React from "react";
import { Link } from "react-router-dom";

import Tags from './Tags'

// shows a list of articles
const Articles = ({ articles }) => (
	<React.Fragment>
		{ /* check there are articles to show */ }
		{ articles.length ?
			<ul className="list-group">
				{ /* map over each article and display a list item for each one */ }
				{ articles.map(article => (
					<li className="list-group-item" key={ article.id }>
						{ /* link to the article using its id */ }
						<Link to={ "/articles/" + article.id }>{ article.title }</Link>
						{ /* use the Tags component to show the tags */ }
						<div className='pull-right'>
							<Tags tags={ article.tags } />
						</div>
					</li>
				))}
			</ul>
			:
			<p>No articles found</p>
		}
	</React.Fragment>
);

export default Articles;
