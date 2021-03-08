import React from "react";
import defaultDisembodiedHead from "../defaultIcons/disembodiedRobotHead.png";
import { Spinner } from "./Spinner.js";

const DisembodiedRobotHead = ({ attribution }) => {
    const [disembodiedHead, setDisembodiedHead] = React.useState(null);
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

    const fetchRobotHead = React.useCallback(() => {
        setLoading(true);
        const escapedText = encodeURIComponent(textInput);
        return fetch(
            `https://robohash.org/${escapedText}/?set=set3&size=200x200`
        )
            .then((response) => {
                if (response.ok) {
                    setLoading(false);
                    setTextInput("");
                    setError("");
                    setRetry(false);
                    setRetryCount(0);
                    setDisembodiedHead(response.url);
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
                    "A disembodied robot head cannot be fetched at this time -- please try again later"
                );
                setLoading(false);
            } else {
                fetchRobotHead();
            }
        }
    }, [retry, retryCount, textInput, fetchRobotHead]);
    const handleSubmit = (e) => {
        e.preventDefault();
        return fetchRobotHead();
    };

    return (
        <div id="headless-robots" className="container-fluid">
            <section id="main-headless-robot">
                <div className="row">
                    <div className="col-12">
                        {loading ? (
                            <Spinner />
                        ) : (
                            <div className="circle">
                                <img
                                    src={
                                        disembodiedHead ??
                                        defaultDisembodiedHead
                                    }
                                    className="img-fluid"
                                    alt="monster icon"
                                />
                            </div>
                        )}
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
                        <form
                            className="d-flex flex-column"
                            onSubmit={handleSubmit}
                        >
                            <label className="text-center d-flex flex-column mx-auto">
                                Enter text to get a new disembodied robot head!
                                <input
                                    className="border border-dark my-2"
                                    type="text"
                                    placeholder="Enter text"
                                    value={textInput}
                                    onChange={(e) =>
                                        setTextInput(e.target.value)
                                    }
                                />
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

export { DisembodiedRobotHead };
