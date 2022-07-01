import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="container jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    )
}

export default Counter;