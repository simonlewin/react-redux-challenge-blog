import { connect } from "react-redux";

import Articles from "../../components/Articles/Articles";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { tag }) => ({
  // return articles whose tags match tagname in props
  articles: Object.values(state.articles).filter(article => article.tags.includes(tag))
});

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps)(Articles);