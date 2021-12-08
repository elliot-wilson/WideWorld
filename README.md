# Wide World

I love history and travel, so I spend a lot of time on [Atlas Obscura](https://www.atlasobscura.com). I decided to build my own version as a way of learning more about React, Redux, and Ruby on Rails, and I'm really happy with the results! Check out the [live site](https://wide-world.herokuapp.com/#/)!

# [Live Site](https://wide-world.herokuapp.com/#/)

<a href="https://wide-world.herokuapp.com/#/" target="_blank" rel="noreferrer noopener"><img src="https://wide-world-seeds.s3.us-east-1.amazonaws.com/readme_photos/homepage.png" /></a>

# Technologies

The project was built with the following tools.

* Ruby on Rails
    * Model-view-controller web application framework
* React
    * JavaScript library for building interactive user interfaces
* Redux
    * JavaScript library that manages and centralizes application state
* PostgreSQL
    * Relational database management system
* Google Maps API / Google Places API
    * APIs for getting location information and rendering awesome maps
* HTML5 / CSS3 / SCSS
    * Standard tools for markup and styling

# Features

## Normalized Data in PostgreSQL and Redux

* Every <a href="https://wide-world.herokuapp.com/#/locations/13" target="_blanl" rel="noopener noreferrer">location page</a> is a meeting point for a number of relational PostgreSQL tables. Who wrote the article? Who edited it? How many people have visited? How many WANT to visit? Is your profile one of them? To access this information quickly, I used Rails' ActiveRecord ORM to pass up data that was associated across those tables as part of a single fetch request. For these associations, I used Rail's eager loading to avoid dreaded N+1 queries.

<img src="https://wide-world-seeds.s3.us-east-1.amazonaws.com/readme_photos/add-to-list2.gif"/>

* To keep that payload manageable on the frontend, I made sure my Redux state was <a href="https://redux.js.org/usage/structuring-reducers/normalizing-state-shape" target="_blanl" rel="noopener noreferrer">normalized</a> according to my database design. By carefully structuring my Redux state, I've made it incredibly smooth to design new React components. I never need to dig deep into nested layers to find the data I'm looking for!

<img src="https://wide-world-seeds.s3.us-east-1.amazonaws.com/readme_photos/normalizedState.png"/>

## Interactive User Profile Maps

* If you visit a <a href="https://wide-world.herokuapp.com/#/users/1" target="_blank" rel="noopener noreferrer">user profile</a>, you can view maps of locations that they've visited, want to visit, etc. Notice that the map can be re-rendered by either the Tabs above the map or the User Detail Links on the left of the page. 

<img src="https://wide-world-seeds.s3.us-east-1.amazonaws.com/readme_photos/profile_maps.gif"/>

* I accomplished this using React component state-management. The parent component passes both the Tabs and the User Details a bound function that reassigns the "active" list of locations in the parent's own state.

````javascript
// user_profile.jsx

// this function chooses which list of locations to set as the "active" list
updateLocationSelection(selection) {

    const headers = ['locationVisits', 'locationWannaVisits', 'locationAdds', 'locationEdits'];
    const idx = headers.indexOf(selection);

    this.setState({locations: this.props[selection], selectedHeaderIdx: idx})
}

// the "active" locations get passed into the Map and the Index, and the function gets passed into User Details and the Map
render() {
    return (
        <div>
            <UserDetailsBox 
                user={user}
                locationVisits={locationVisits}
                locationWannaVisits={locationWannaVisits}
                locationAdds={locationAdds}
                locationEdits={locationEdits}
                updateLocationSelection={this.updateLocationSelection}
                />
            <section className="user-locations-box">
                <UserLocationsMapBox
                    user={user}
                    locations={this.state.locations}
                    selectedHeaderIdx={this.state.selectedHeaderIdx}
                    updateLocationSelection={this.updateLocationSelection}
                />
                <UserLocationsIndex
                    locations={this.state.locations}
                />
            </section>
        </div>
    )
}
````

* By the way, those location coordinates are generated automatically whenever a user adds a new location. I used a Google Places API autocomplete to extract the latitude/longitude from any address the user submits.

## Random Location

<img src="https://wide-world-seeds.s3.us-east-1.amazonaws.com/readme_photos/random.gif"/>

* One simple feature I love is the "Random Location" button. On the backend, I created a custom API route that returns a single entry at random from my Locations table. (A similar route generates the <a href="https://wide-world.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">splash page</a>.) The trickier part was refactoring my Location component so that it had the option of receiving a prefetched location instead of initializing the fetching itself.

````javascript
// random_location_container.js
class RandomLocation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchComplete: false
        }
    }

    componentDidMount() {
        this.props.fetchRandomLocation()
            .then(() => this.setState({fetchComplete: true}));
    }

    render() {
        const { location } = this.props;

        if (!this.state.fetchComplete) return (<div className="placeholder"></div>)

        return (
            <Redirect
                to={{
                    pathname: `/locations/${location.id}`,
                    state: {
                        randomLocation: location,
                        isRandom: true,
                    }
                }}
            />
        )
    }

}

// location.jsx

componentDidMount(){
    if (!this.props.isRandom) {
        this.props.fetchLocation(this.props.match.params.locationId);
    }
}


````

## More features!

* There's much more to explore. The searchbar and "Add to List" modals in particular gave me a real headache, so I hope you like them! If there's anything specific you're curious about, I'm always happy to chat.

## What's next?

* I'm hoping to expand the site's search functionality so that you can search by city/country. I'm also hoping to build a category-tagging functionality (e.g. "Haunted Houses", "Natural Phenomena") which I can use to build out a "Similar Places" display.