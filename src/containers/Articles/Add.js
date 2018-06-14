import { connect } from "react-redux";

// import { addArticle } from "../../data/actions/state";
// import in the postArticles API action
import { postArticles } from "../../data/actions/api";

import Add from "../../components/Articles/Add";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
// const mapDispatchToProps = dispatch => ({
//   // onSubmit is a function which dispatches an action "addArticle"
//   onSubmit: data => dispatch(addArticle(data))
// });

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => {
      dispatch(postArticles(data));
    },
  }
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Add);