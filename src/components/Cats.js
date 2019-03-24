import React from "react";

const Cats = props => {
    return (
        <section>
            <div className="row">
                <div className="col-4">
            <img src={props.image} alt="default robot icon" />
            <div className="top"></div>
            <div className="legs">
                <div className="right"></div>
                <div className="left"></div>
            </div>
            </div>
            <div id="get-kitten" className="col-8 my-auto">
            <h1 className="text-center h1">Welcome to Cat Icons for Great Good</h1>
            <div id="form" className="py-5">
            <form className="d-flex flex-column"onSubmit={props.handleCat}>
            <label className="text-center d-flex flex-column h2 mx-auto">Enter text to get a new kitten!
            <input type="text" placeholder="Enter text"value={props.input} onChange={props.handleChange}></input>
            </label>
            <input className="btn w-25 mx-auto btn-dark" type="submit" value="Submit" /></form></div>
          </div>
          </div>
        </section>
    )
}

export default Cats;