import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMapMarkedAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const NewLocationOverview = () => (
    <div className="location-tips-container">
        <p className="subheading">Before you start, here are a few tips for making your article shine:</p>
        <ul className="location-tips-list">
            <li className="location-tip">
                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                <p className="form-help-text location-tip-text">
                    Submit a place that is both obscure and wondrous.
                </p>
            </li>
            <li className="location-tip">
                <FontAwesomeIcon icon={faPencilAlt}/>
                <p className="form-help-text location-tip-text">
                    Tell our readers, in your own words, what makes this place unique.
                </p>
            </li>
            <li className="location-tip">
                <FontAwesomeIcon icon={faCamera}/>
                <p className="form-help-text location-tip-text">
                    Upload at least one photo.
                </p>
            </li>
        </ul>
    </div>
)

export default NewLocationOverview;