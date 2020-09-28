import React from "react";
import defaultCat from '../defaultIcons/cat.png';
import { Spinner } from './Spinner.js';

const Cats = ({attribution, setPage}) => {
  const [cat, setCat] = React.useState(null);
  const [textInput, setTextInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
      setPage();
  }, [setPage])

  const handleSubmit = (e) => {
    e.preventDefault();
    let escapedTextInput = encodeURIComponent(textInput);
    setLoading(true);
    fetch(`https://robohash.org/${escapedTextInput}/?set=set4&size=200x200`)
      .then((response) => {
        setCat(response.url);
        setLoading(false);
        setTextInput("");
      })
      .catch((err) => {
        console.log(err.message)
        setLoading(false);
      });
  };
  
  return (
    <div id="cats" className="container-fluid">
      <section id="main-cat">
        <div className="row ">
          <div className="col-12">
           { loading ? <Spinner /> : <img src={cat ?? defaultCat} id="cat-image" alt="default cat icon" />} 
            <div className="row mx-auto">
              <div className="top col-12"></div>
              <div className="left col-1"></div>
              <div className="col" />
              <div className="right col-1"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="get-kitten"
        className="d-flex flex-column justify-content-center"
      >
        <div className="row">
          <h1 className="col-12 text-center">Cat Icons for Great Good</h1>
        </div>
        <div className="row">
          <div id="form" className="py-2 col-12">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label className="text-center d-flex flex-column mx-auto">
                Enter text to get a new kitten!
                <input
                  className="border border-dark my-2"
                  type="text"
                  value={textInput}
                  placeholder="Enter text"
                  onChange={(e) => setTextInput(e.target.value)}
                ></input>
              </label>
              <button
                className="btn bt-block mx-auto my-2 btn-dark"
              >Submit</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">Icons created by {attribution}</div>
        </div>
      </section>
    </div>
  );
};

export { Cats };
