import React from "react";

const Cats = props => {
    return (
        <div id="cats" className="container-fluid">
        <section id="main-cat">
            <div className="row ">
                <div className="col-12">
            <img src={props.image} id="cat-image" alt="default cat icon" />
            <div className="row mx-auto">
                <div className="top col-12"></div>  
                <div className="left col-1"></div>
                <div className="col"/>
      <div className="right col-1"></div></div>   

            </div></div></section>
            <section id="get-kitten" className="d-flex flex-column justify-content-center">
                <div className="row">
            <h1 className="col-12 text-center">Cat Icons for Great Good</h1></div>
            <div className="row">
                <div id="form" className="py-2 col-12">
            <form className="d-flex flex-column"onSubmit={props.handleSubmit}>
            <label className="text-center d-flex flex-column mx-auto">Enter text to get a new kitten!
            <input className="border border-dark my-2" type="text" placeholder="Enter text"value={props.input} onChange={props.handleChange}></input>
            </label>
            <input className="btn bt-block mx-auto my-2 btn-dark" type="submit" value="Submit" /></form></div>
          </div>
          <div className="row">
              <div className="col-12">
                  Icons created by {props.attribution}
              </div>
          </div>
        </section>
        </div>
    )
}

export default Cats;