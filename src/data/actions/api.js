// import our axios config file
import axios from "../axios";

import history from "../../history";

// import the setTitles action
import { setTitles, addArticle, setArticle, removeArticle, editArticle, setComments } from "./state";

export const getTitles = () => dispatch => {
	axios.get("/articles").then(({ data }) => {
    const titles = data.data;
    // dispatch the setTitles action, passing along the articles List
    dispatch(setTitles(titles));
	});
};

export const postArticles = data => dispatch => {
	data.tags = data.tags.split(/,\s+/);

	axios.post("/articles", data).then(({ data }) => {
		const article = data.data;
		dispatch(addArticle(article));

		// go to home page
		history.push("/");
	});
};

export const getComments = id => dispatch => {
	axios.get(`/articles/${id}/comments`).then(({ data }) => {
			const comments = data.data;
			dispatch(setComments(id, comments));
	});
};

export const getArticle = id => dispatch => {
	axios.get(`/articles/${id}`).then(({ data }) => {
		const article = data.data;
		dispatch(setArticle(article));
		dispatch(getComments(id));
	});
};

export const deleteArticle = id => dispatch => {
	axios.delete(`/articles/${id}`).then(() => {
		dispatch(removeArticle(id));

		// go to home page
		history.push("/");		
	});
};

export const putArticle = (id, data) => dispatch => {
	data.tags = data.tags.split(/,\s+/);

	axios.put(`/articles/${id}`, data).then(({ data }) => {
		const article = data.data;
		dispatch(editArticle(article));
		history.push(`/articles/${id}`);		
	});
};