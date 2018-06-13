import React from "react";
import { Link } from "react-router-dom";

// a component to show the Edit and Delete buttons
const Actions = ({ article }) => (
    <aside className="float-right">
        <Link to={ "/articles/" + article.id + "/edit" } className="btn btn-info">
            Edit Article
        </Link>

        { " " }

        <Link to={ "/articles/" + article.id + "/delete" } className="btn btn-danger">
            Delete Article
        </Link>
    </aside>
);

export default Actions;
