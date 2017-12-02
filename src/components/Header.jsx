import React from "react";
import { Link } from "react-router-dom";

// a simple header component
// includes an Add Article link
const Header = ({ children, subtitle }) => (
    <header className="page-header">
        <h1>
            <Link to="/">{ children }</Link>
            { " " }
            { subtitle ? <small>{ subtitle }</small> : null }

            <aside className="pull-right">
                <Link to="/articles/add" className="btn btn-primary">Add Article</Link>
            </aside>
        </h1>
    </header>
);

export default Header;
