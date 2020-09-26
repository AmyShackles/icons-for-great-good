import React from "react";

const Title = ({iconType}) => {
    return (
        <div id="header" className="bg-dark">
            <p>{iconType} Icons</p>
        </div>
    )
}
export { Title }