import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './login/signup_form_container';
import CreateLocationFormContainer from './location/create_location_form_container';
import UpdateLocationFormContainer from './location/update_location_form_container';
import NavBar from './header/navbar';
import LocationContainer from './location/location_container';

const App = () => (
    <div>
        <header>
            <Route path="/" component={NavBar}/>
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/locations/new" component={CreateLocationFormContainer} />
            <ProtectedRoute exact path="/locations/:locationId/edit" component={UpdateLocationFormContainer} />
            <Route path="/locations/:locationId" component={LocationContainer}/>
        </Switch>
    </div>
)

export default App;