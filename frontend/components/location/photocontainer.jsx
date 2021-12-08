import React from "react";

const PhotoContainer = (props) => {

    const { photos } = props;

    return (
        <div className="photo-container">
            {photos.map((photo, idx) => <img key={`photo-${idx}`}src={photo}/>)}
        </div>
    )
}

export default PhotoContainer;