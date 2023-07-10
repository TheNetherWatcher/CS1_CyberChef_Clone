import React from 'react'
import './buttonsection.css'

function Button(props) {
    return(
        <button className="custom-button" onClick={props.func}>{props.algoname}</button>
    );
}

export default Button;