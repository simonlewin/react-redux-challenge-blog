import { connect } from "react-redux";

import history from "../../history";

import { editArticle } from "../../data/actions";

import Edit from "../../components/Articles/Edit";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
  let article = state.articles[id];

  const fields = article ? [
    { name: "title", label: "Title", value: article.title },
    { name: "article", label: "Article", value: article.article },
    { name: "tags", label: "Tags", value: article.tags.join(", ") }
  ] : null;

  return { fields: fields };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    // onSubmit is a function which dispatches an action "addArticle"
    onSubmit: data => {
      dispatch(editArticle(id, data));
      // go to home page
      history.push("/articles/" + id);
    }
  };
};

// connect up mapStateToProps with the Edit component
// Edit's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Edit);