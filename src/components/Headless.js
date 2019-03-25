import React from "react";

class Headless extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  hyb;
  componentDidMount() {
    fetch("https://robohash.org//?set=set3")
      .then(response => {
        this.setState({
          image: response.url
        });
      })
      .catch(err => console.log(err.message));
  }
  render() {
    let imgSrc = this.props.headless ? this.props.headless : this.state.image;
    return (
      <div id="headless-robots" className="container-fluid">
        <section id="main-headless-robot">
          <div className="row">
            <div className="col-12">
              <img src={imgSrc} className="img-fluid" alt="monster icon" />
            </div>
          </div>
        </section>
        <section
          id="get-headless-robot"
          className="d-flex flex-column justify-content-center"
        >
          <div className="row">
            <h1 className="col-12 text-center">
              Headless Robot Icons for Great Good
            </h1>
          </div>
          <div className="row">
            <div id="form" className="py-2 col-12">
              <form
                className="d-flex flex-column"
                onSubmit={this.props.handleSubmit}
              >
                <label className="text-center d-flex flex-column mx-auto">
                  Enter text to get a new headless robot!
                  <input
                    className="border border-dark my-2"
                    type="text"
                    placeholder="Enter text"
                    value={this.props.input}
                    onChange={this.props.handleChange}
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
              Icons created by {this.props.attribution}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Headless;
