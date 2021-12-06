import React from "react";
import SplashLocationsBoxContainer from './splash_locations_box_container';

const HomePageContainer = () => (
    <div className="homepage-container">
        <div className="homepage-searchbar-container">
            <p className="headline">The definitive guide to the world's hidden wonders.</p>
        </div>
        <SplashLocationsBoxContainer />
    </div>
)

export default HomePageContainer;