import React from "react";

import Tags from "./Tags";
import FourOhFour from "../FourOhFour";

const Delete = ({ article, onClick }) => !article ? <FourOhFour /> : (
  <div>

    <h2>{ article.title }</h2>

    <article dangerouslySetInnerHTML={{ __html: article.article }} />

    { /* use the Tags component to show the tags */ }
    <Tags tags={ article.tags } />

    <button onClick={ onClick } className="float-right btn btn-danger">Delete Article</button>

  </div>
);

export default Delete;