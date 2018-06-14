// import our axios config file
import axios from "../axios";

import history from "../../history";

// import the setTitles action
import { setTitles, addArticle } from "./state";

export const getTitles = () => dispatch => {
	axios.get("/articles").then(({ data }) => {
    const titles = data.data;
    // dispatch the setTitles action, passing along the articles List
    dispatch(setTitles(titles));
	});
};

export const postArticles = ( data ) => dispatch => {
	data.tags = data.tags.split(/,\s+/);

	axios.post("/articles", data).then(({ data }) => {
		const article = data.data;
		dispatch(addArticle(article));

		// go to home page
		history.push("/");
	});
};