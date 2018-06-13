import { connect } from "react-redux";

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

// connect up mapStateToProps with the Edit component
// Edit's props are now controlled by this file
export default connect(mapStateToProps)(Edit);