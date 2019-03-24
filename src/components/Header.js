import React from "react";

const Header = props => {
    let iconType = props.location.pathname !== "/" ? props.location.pathname.split('_').join(' ').toUpperCase().slice(1) : props.path.toUpperCase();
    return (
        <div id="header">
            <p>{iconType} Icons for Great Good</p>
        </div>
    )
}
export default Header;