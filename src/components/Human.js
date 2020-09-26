import React from "react";
import defaultHuman from '../defaultIcons/human.png';

const Human = ({ setPage, attribution }) => {
  const [human, setHuman] = React.useState(null);
  const [textInput, setTextInput] = React.useState("");

  React.useEffect(() => {
    setPage();
  }, [setPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let escapedTextInput = encodeURIComponent(textInput);
    fetch(`https://robohash.org/${escapedTextInput}/?set=set5&size=200x200`)
      .then((response) => {
        setHuman(response.url);
        setTextInput("");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div id="humans" className="container-fluid">
      <section id="main-human">
        <div className="row ">
          <div className="col-12">
            <img src={human ?? defaultHuman} className="img-fluid" alt="human icon" />
          </div>
        </div>
      </section>
      <section
        id="get-human"
        className="d-flex flex-column justify-content-center"
      >
        <div className="row">
          <h1 className="col-12 text-center">Human Icons for Great Good</h1>
          <h2 className="col-12 text-center">Please be patient with this one, it takes more time to generate. :)</h2>
        </div>
        <div className="row">
          <div id="form" className="py-2 col-12">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label className="text-center d-flex flex-column mx-auto">
                Enter text to get a new human!
                <input
                  className="border border-dark my-2"
                  type="text"
                  placeholder="Enter text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                ></input>
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
          <div className="col-12">Icons created by {attribution}</div>
        </div>
      </section>
    </div>
  );
};

export { Human };
