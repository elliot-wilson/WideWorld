import React from "react";

const PhotoContainer = (props) => {

    const { photos } = props;

    return (
        <div className="photo-container">
            {photos.map(photo => <img src={photo}/>)}
        </div>
    )
}

export default PhotoContainer;