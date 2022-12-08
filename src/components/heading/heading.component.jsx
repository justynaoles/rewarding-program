import React from "react";
import "./heading.styles.scss";

const Heading = ({...props}) => {

    const {tag, text, extraClass} = props;
    const HeadingTag = tag;

    return (
        <HeadingTag className={extraClass ? extraClass + ' header-' + tag : 'header-'+tag}>{text}</HeadingTag>
    )
}

export default Heading;