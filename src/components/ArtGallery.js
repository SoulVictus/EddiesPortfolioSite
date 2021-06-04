import React from 'react'
import "./ArtGallery.css";

function ArtGallery(props) {
    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {props.children}
            </div>
        </div>
    )
}

export default ArtGallery
