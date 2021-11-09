import React from "react";
import SplashLocationsBoxContainer from './splash_locations_box_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HomePageContainer = () => (
    <div className="homepage-container">
        <div className="homepage-searchbar-container">
            <p className="headline">The definitive guide to the world's hidden wonders.</p>
            <div className="searchbar">
                <input
                    className="searchbar-input"
                    placeholder="Search destinations and more..."
                />
                <button className="searchbar-button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>
        <SplashLocationsBoxContainer />
    </div>
)

export default HomePageContainer;