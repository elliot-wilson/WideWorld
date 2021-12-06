import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './login/signup_form_container';
import CreateLocationFormContainer from './location/create_location_form_container';
import UpdateLocationFormContainer from './location/update_location_form_container';
import NavBar from './header-footer/navbar';
import RandomLocationContainer from './location/random_location_container';
import LocationContainer from './location/location_container';
import HomePageContainer from './homepage/homepage_container';
import UserProfileContainer from './user_profile/user_profile_container';
import NotFound from './not_found';
import Footer from './header-footer/footer.jsx'

const App = () => (
    <div>
        <header>
            <Route path="/" component={withRouter(NavBar)}/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/locations/new" component={CreateLocationFormContainer} />
            <ProtectedRoute exact path="/locations/:locationId/edit" component={UpdateLocationFormContainer} />
            <Route exact path="/locations/random" component={RandomLocationContainer}/>
            <Route exact path="/locations/:locationId" component={LocationContainer}/>
            <Route path="/users/:userId" component={UserProfileContainer}/>
            <Route exact path="/" component={HomePageContainer}/>
            <Route component={NotFound} />
        </Switch>
        <Route path="/" component={Footer}/>
    </div>
)

export default App;