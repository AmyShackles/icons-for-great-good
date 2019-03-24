import React from "react";

const Cats = props => {
    return (
        <div id="cats" className="container-fluid h-100">
        <section id="main-cat">
            <div className="row ">
                <div className="col-12">
            <img src={props.image} className="img-fluid" alt="default cat icon" />
            <div className="row mx-auto">
                <div className="top col-12"></div>  
                <div className="left col-1"></div>
                <div className="col"/>
      <div className="right col-1"></div></div>   

            </div></div></section>
            <section id="get-kitten" className="d-flex flex-column justify-content-center">
                <div className="row">
            <h1 className="col-12 text-center">Welcome to Cat Icons for Great Good</h1></div>
            <div className="row">
                <div id="form" className="py-2 col-12">
            <form className="d-flex flex-column"onSubmit={props.handleCat}>
            <label className="text-center d-flex flex-column mx-auto">Enter text to get a new kitten!
            <input className="border border-dark" type="text" placeholder="Enter text"value={props.input} onChange={props.handleChange}></input>
            </label>
            <input className="btn bt-block mx-auto btn-dark" type="submit" value="Submit" /></form></div>
          </div>
        </section>
        </div>
    )
}

export default Cats;