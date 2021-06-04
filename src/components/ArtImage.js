import React from 'react';
import "./ArtImage.css";

function ArtImage({url}) {
    return (
        <div className="image" style={{backgroundImage: "url(img/"+`${url}`+")"}}>
        </div>
    )
}

export default ArtImage
