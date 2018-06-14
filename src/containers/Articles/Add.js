import { connect } from "react-redux";

import history from "../../history";

import { addArticle } from "../../data/actions/state";

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
      dispatch(addArticle(data));

      // go to home page
      history.push("/");
    },
  }
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Add);