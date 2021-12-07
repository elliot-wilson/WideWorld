import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {



    return (
        <section className="about">
            <h2 className="subheading">About Wide World</h2>
            <section>
                <p>I love history and traveling, so I spend a lot of time on <a href="http://www.atlasobscura.com" target="_blank" rel="noopener noreferrer">Atlas Obscura</a>.</p>
                <p>I decided to build my own version as a way of learning more about React, Redux, and Ruby on Rails, and I'm really happy with the results!</p>
                <br/>
            </section>
            <h3 className="sub-subheading">Features</h3>
            <section>
                <p>There is a LOT of information that gets displayed on each Location's show page. Who wrote the article? Who edited it? How many people have visited it? How many people WANT to visit? Is your profile one of them?</p>
                <p>To store this information, I built a number of tables in a PostgreSQL relational database. I then used Rails' ActiveRecord ORM to pass up data that was associated across those tables whenever the site loaded a Location's page. (Otherwise, I would have needed to make a half-dozen separate API calls to get everything.) For these associations, I used Rail's eager loading to avoid dreaded N+1 queries.</p>
                <p>To keep that payload manageable on the frontend, I made sure my Redux state was <a href="https://redux.js.org/usage/structuring-reducers/normalizing-state-shape" target="_blanl" rel="noopener noreferrer">normalized</a> according to my database design. By carefully structuring my Redux state, I've made it incredibly smooth to design new React components. I never need to dig deep into nested layers to find the data I'm looking for!</p>
                <br/>
            </section>
            <h3 className="sub-subheading">More features!</h3>
            <section>
                <p>The real payoff is in your experience of the site, though. As you click around, be sure to visit a <Link to="/users/1">user profile</Link>. You'll see maps &mdash; built using the Google Maps API &mdash; that display the locations of places the user has added to one of their various lists. Clicking either the Tabs or the User Detail Links will re-render the map with a new location-list &mdash; a fun product of careful React component-state management. (The parent component passes the Tabs a bound function that reassigns the "active" list of locations in the parent's own state.)</p>
                <p>By the way, those coordinates are generated automatically when you <Link to="/locations/new">create a new Location</Link>, thanks to my use of an autocomplete that uses the Google Places API. (The autocomplete looks really nice, too.)</p>
                <p>To me, though, the most fun is going to a <Link to="/locations/random">random location</Link>! To make this feature work, I built a custom API route that pulls a random location from my database, and I refactored my Location component so that it had the option of receiving a prefetched location instead of initializing the fetching itself. A similar "random" API route is used to generate the <Link to="/">splash page</Link>.</p>
                <p>There's much more to explore. The searchbar and "Add to List" modals gave me a real headache, so I hope you like them!</p>
                <br/>
            </section>
            <h2 className="subheading">About Me</h2>
            <p>I'm Elliot Wilson, a software engineer with an unusual journey. I got degrees in ancient Greek history/archaeology from Harvard and Princeton before I discovered that my real calling was software engineering. There were signs along the way, of course, including a few years I spent as a consultant specializing in implementing Workday's HRIS software. I'm currently building projects using Ruby on Rails as well as the MERN stack (MongoDB, Express.js, React / Redux, Node.js)</p>
        </section>
    )
}

export default About;