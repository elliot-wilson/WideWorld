import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AuthIndexContainer from './header/auth_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './login/signup_form_container';
import CreateLocationFormContainer from './location/create_location_form_container';

const App = () => (
    <div>
        <header>
            <h2>Wide World</h2>
            <AuthIndexContainer/>
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/locations/new" component={CreateLocationFormContainer} />
    </div>
)

export default App;