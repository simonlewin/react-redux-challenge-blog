import { connect } from "react-redux";

import { deleteArticle } from "../../data/actions/api";

import Delete from "../../components/Articles/Delete";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = (dispatch, { id }) => ({
  onClick: () => {
    dispatch(deleteArticle(id));
  }
});

const mapStateToProps = (state, { id }) => ({
  article: state.articles[id],
});

// connect up mapDispatchToProps with the Delete component
// has to be the second argument - the first is for mapStateToProps
// Delete's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Delete);