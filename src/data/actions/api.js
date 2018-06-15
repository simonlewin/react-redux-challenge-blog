// import our axios config file
import axios from "../axios";

import history from "../../history";

// import the setTitles action
import { 
	setTitles, 
	addArticle, 
	setArticle, 
	removeArticle, 
	editArticle, 
	setComments, 
	addComment 
} from "./state";

export const getTitles = () => dispatch => {
	axios.get("/articles").then(({ data }) => {
    const titles = data.data;
    dispatch(setTitles(titles));
	});
};

export const postArticles = data => dispatch => {
	data.tags = data.tags.split(/,\s+/);

	axios.post("/articles", data).then(({ data }) => {
		const article = data.data;
		dispatch(addArticle(article));
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

export const postComment = (id, data) => dispatch => {
	axios.post(`/articles/${id}/comments`, data).then(({ data }) => {
		const comment = data.data;
		dispatch(addComment(id, comment));
		history.push(`/articles/${id}`);		
	});
}