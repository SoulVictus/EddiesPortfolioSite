import React from 'react'
import "./TextArea.css";

const TextArea = (props) => {
    return (
        <div className="textarea-container">
            {props.children}
        </div>
    )
}

export default TextArea;