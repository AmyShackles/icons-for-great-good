import React from 'react';

const Spinner = () => {
    return (
        <>
        <p style={{fontSize: 20}}>Generating image</p>
        <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </>
    )
}

export { Spinner }