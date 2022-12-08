import React from "react";
import "./header.styles.scss";

const Header = (props) => {

    return(
        <header className="header">
            {props.children}
        </header>
    )
}

export default Header;