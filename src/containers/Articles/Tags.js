import { connect } from "react-redux";

import Articles from "../../components/Articles/Articles";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { tag }) => ({
  // return articles with matching tag
  articles: Object.values(state.articles).filter(article => article.tags.some(x => x === tag))
});

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps)(Articles);