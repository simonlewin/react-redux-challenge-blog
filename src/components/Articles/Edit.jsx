import React, { Fragment } from "react";

import Form from "../Forms/Form";
import FourOhFour from '../FourOhFour'

// the edit article component
const Edit = ({ fields, onSubmit }) => !fields ? <FourOhFour /> : (
  <Fragment>
    <h2>Edit Article</h2>

    <Form onSubmit={ onSubmit } fields={ fields } button="Submit" />
  </Fragment>
);

export default Edit;
