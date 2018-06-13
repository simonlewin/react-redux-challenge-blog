import { connect } from "react-redux";

import { deleteArticle } from "../../data/actions";

import Delete from "../../components/Articles/Delete";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = (dispatch, { id }) => {
  return {
    // onSubmit is a function which dispatches an action "addArticle"
    onClick: () => dispatch(deleteArticle(id)),
  };
};

const mapStateToProps = (state, { id }) => ({
  // this is why storing articles in an object is useful
  article: state.articles[id],
});

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Delete);