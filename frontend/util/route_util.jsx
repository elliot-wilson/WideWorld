import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from 'react-router-dom';

const Protected = ({ path, loggedIn, component: Component, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn? (
            <Component {...props} />
        ) : (
            <Redirect to="/login"/>
        )
    )} />
);

const Auth = ({ path, loggedIn, component: Component, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mSTP = (state) => (
    {loggedIn: Boolean(state.session.id)}
);

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const AuthRoute = withRouter(connect(mSTP)(Auth));