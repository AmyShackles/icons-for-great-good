import React from "react";
import defaultDisembodiedHead from '../defaultIcons/disembodiedRobotHead.png'

const DisembodiedRobotHead = ({setPage, attribution}) => {
  const [disembodiedHead, setDisembodiedHead] = React.useState(null);
  const [textInput, setTextInput] = React.useState("");

  React.useEffect(() => {
    setPage();
  }, [setPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let escapedTextInput = encodeURIComponent(textInput);
    fetch(`https://robohash.org/${escapedTextInput}/?set=set3&size=200x200`)
      .then((response) => {
        setDisembodiedHead(response.url);
        setTextInput("");
      })
      .catch((err) => console.log(err.message));
  };
  
  return (
    <div id="headless-robots" className="container-fluid">
      <section id="main-headless-robot">
        <div className="row">
          <div className="col-12">
            <img
              src={disembodiedHead ?? defaultDisembodiedHead}
              className="img-fluid"
              alt="monster icon"
            />
          </div>
        </div>
      </section>
      <section
        id="get-headless-robot"
        className="d-flex flex-column justify-content-center"
      >
        <div className="row">
          <h1 className="col-12 text-center">
            Disembodied Robot Head Icons for Great Good
          </h1>
        </div>
        <div className="row">
          <div id="form" className="py-2 col-12">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label className="text-center d-flex flex-column mx-auto">
                Enter text to get a new disembodied robot head!
                <input
                  className="border border-dark my-2"
                  type="text"
                  placeholder="Enter text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
              </label>
              <input
                className="btn bt-block mx-auto my-2 btn-dark"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            Icons created by {attribution}
          </div>
        </div>
      </section>
    </div>
  );
};

export { DisembodiedRobotHead };
