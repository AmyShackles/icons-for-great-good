import React from "react";
import defaultRobot from "../defaultIcons/robot.png";
import { Spinner } from './Spinner.js';

const Robot = ({ setPage, attribution }) => {
  const [robot, setRobot] = React.useState(null);
  const [textInput, setTextInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setPage();
  }, [setPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let escapedTextInput = encodeURIComponent(textInput);
    setLoading(true);
    fetch(`https://robohash.org/${escapedTextInput}/?set=set1&size=200x200`)
      .then((response) => {
        setRobot(response.url);
        setLoading(false);
        setTextInput("");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <div id="robots" className="container-fluid">
      <section id="main-robot">
        <div className="row ">
          <div className="col-12">
            {loading ? <Spinner /> : (<div className="circle"><img
              src={robot ?? defaultRobot}
              className="img-fluid"
              alt="robot icon"
            /></div>)}
          </div>
        </div>
      </section>
      <section
        id="get-robot"
        className="d-flex flex-column justify-content-center"
      >
        <div className="row">
          <h1 className="col-12 text-center">Robot Icons for Great Good</h1>
        </div>
        <div className="row">
          <div className="py-2 col-12">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label className="text-center d-flex flex-column mx-auto">
                Enter text to get a new robot!
                <input
                  className="border border-dark my-2"
                  type="text"
                  placeholder="Enter text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                ></input>
              </label>
              <button
                className="btn bt-block mx-auto my-2 btn-dark"
              >
                Submit
              </button>
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

export { Robot };
