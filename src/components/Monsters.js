import React from "react";
import defaultMonster from "../defaultIcons/monster.png";
import { Spinner } from "./Spinner.js";

const Monster = ({ attribution }) => {
    const [monster, setMonster] = React.useState(null);
    const [textInput, setTextInput] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [retry, setRetry] = React.useState(false);
    const [retryCount, setRetryCount] = React.useState(0);
    const [error, setError] = React.useState("");
    const ref = React.useRef(retryCount);

    function updateRetryCount(state) {
        ref.current = state;
        setRetryCount(state);
    }

    const fetchMonster = React.useCallback(() => {
        setLoading(true);
        const escapedText = encodeURIComponent(textInput);
        return fetch(
            `https://robohash.org/${escapedText}/?set=set2&size=200x200`
        )
            .then((response) => {
                if (response.ok) {
                    setLoading(false);
                    setRetry(false);
                    setRetryCount(0);
                    setTextInput("");
                    setError("");
                    setMonster(response.url);
                } else {
                    setRetry(true);
                }
            })
            .catch(() => {
                setRetry(true);
            });
    }, [textInput]);

    React.useEffect(() => {
        if (textInput && retry) {
            updateRetryCount(retryCount + 1);
            if (retryCount > 3) {
                setError(
                    "A monster cannot be fetched at this time.  Please try again later."
                );
                setLoading(false);
            } else {
                fetchMonster();
            }
        }
    }, [retry, retryCount, textInput, fetchMonster]);

    const handleSubmit = (e) => {
        e.preventDefault();
        return fetchMonster();
    };

    return (
        <div id="monsters" className="container-fluid">
            <section id="main-monster">
                <div className="row ">
                    <div className="col-12">
                        {loading ? (
                            <Spinner />
                        ) : (
                            <div className="circle">
                                <img
                                    src={monster ?? defaultMonster}
                                    className="img-fluid"
                                    alt="monster icon"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section
                id="get-monster"
                className="d-flex flex-column justify-content-center"
            >
                <div className="row">
                    <h1 className="col-12 text-center">
                        Monster Icons for Great Good
                    </h1>
                </div>
                <div className="row">
                    <div id="form" className="py-2 col-12">
                        <form
                            className="d-flex flex-column"
                            onSubmit={handleSubmit}
                        >
                            <label className="text-center d-flex flex-column mx-auto">
                                Enter text to get a new monster!
                                <input
                                    className="border border-dark my-2"
                                    type="text"
                                    placeholder="Enter text"
                                    value={textInput}
                                    onChange={(e) =>
                                        setTextInput(e.target.value)
                                    }
                                ></input>
                                {error && <span>{error}</span>}
                            </label>
                            <button className="btn bt-block mx-auto my-2 btn-dark">
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

export { Monster };
