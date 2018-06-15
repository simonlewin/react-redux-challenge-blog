import { connect } from "react-redux";

import Articles from "../../components/Articles/Articles";

import { getTitles } from "../../data/actions/api"

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { tag }) => ({
  // return articles whose tags match tagname in props
  articles: state.titles.filter(article => article.tags.includes(tag))
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getTitles()),
  };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Articles);