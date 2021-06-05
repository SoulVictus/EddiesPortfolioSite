import React from 'react';
import "./ArtImage.css";

function ArtImage({url, handleImageClick}) {
    return (
        <div className="image" style={{backgroundImage: "url(img/"+`${url}`+")"}} onClick={() => handleImageClick(url)}>
        </div>
    )
}

export default ArtImage
