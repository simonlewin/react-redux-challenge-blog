import React from "react";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <React.Fragment>
        { tags.map((tag, i) => (
            <span className="label label-primary" key={ i }>{ tag }</span>
        ))}
    </React.Fragment>
);

export default Tags;
