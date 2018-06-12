import React, { Fragment } from "react";

import Form from "../Forms/Form";
import FourOhFour from '../FourOhFour'

// the fields the form should have
// const fields = [
//   { name: "title", label: "Title", value: "" },
//   { name: "article", label: "Article", value: "" },
// ];

// the add article component
const Edit = ({ fields }) => !fields ? <FourOhFour /> : (
  <Fragment>
    <h2>Edit Article</h2>

    <Form className="panel-body" fields={ fields } button="Edit Article" />
  </Fragment>
);

export default Edit;
