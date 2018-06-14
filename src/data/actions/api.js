// import our axios config file
import axios from "../axios";

// import the setTitles action
import { setTitles } from "./state";

export const getTitles = () => dispatch => {
	axios.get("/articles").then(({ data }) => {
    const articles = data.data;
    // dispatch the setTitles action, passing along the articles List
    dispatch(setTitles(articles));
	});
};