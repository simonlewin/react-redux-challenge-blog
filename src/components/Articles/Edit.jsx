import React, { Fragment } from "react";

import Form from "../Forms/Form";
import FourOhFour from '../FourOhFour'

// the edit article component
const Edit = ({ fields, onSubmit }) => !fields ? <FourOhFour /> : (
  <Fragment>
    <h2>Edit Article</h2>

    <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
  </Fragment>
);

export default Edit;
