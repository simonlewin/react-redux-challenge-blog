import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// import the App component
import App from "./App";

// create some dummy articles
// store them in an object
// so that we can easily reference each one by its id
const articles = {
    1: {
        id: 1,
        title: "Post #1",
        article: "<p>Blah blah blah</p>",
        comments: [
            { email: "bob@bob.com", comment: "Great blog post" },
        ],
        tags: ["blah", "monkeys"],
    },
    2: {
        id: 2,
        title: "Post #2",
        article: "<p>Blah blah blah</p>",
        comments: [
            { email: "sandi@sandi.com", comment: "I disagree, but not in an agressive and unpleasant manner" },
        ],
        tags: ["blah", "fish-fingers"],
    },
};

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Router history={ history }>
        <App articles={ articles } />
    </Router>,
    document.getElementById("root"),
);
