import { connect } from "react-redux";

import Article from "../../components/Articles/Article";

import { getArticle, postComment } from "../../data/actions/api";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => ({
  article: state.articles[id],
});

// setup mapDispatchToProps to call the action
const mapDispatchToProps = (dispatch, { id }) => ({
  onLoad: () => dispatch(getArticle(id)),
  addComment: data => dispatch(postComment(id, data)),
});

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);