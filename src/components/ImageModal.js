import React from 'react'
import "./ImageModal.css";

function ImageModal({handleModalShow, image}) {
    return (
        <div className="modal" onClick={handleModalShow}>
            <img className="modal-image" src={`img/${image}`} />
        </div>
    )
}

export default ImageModal
