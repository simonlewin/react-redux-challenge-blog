import React from "react";

import Form from "../Forms/Form";

// the fields the form should have
const fields = [
    { name: "title", label: "Title", value: "" },
    { name: "article", label: "Article", value: "" },
    { name: "tags", label: "Tags", value: "" }
];

// the add article component
const Add = ({ onSubmit }) => (
    <React.Fragment>
        <h2>Add Article</h2>

        <Form onSubmit={ onSubmit } fields={ fields } button="Add Article" />
    </React.Fragment>
);

export default Add;
