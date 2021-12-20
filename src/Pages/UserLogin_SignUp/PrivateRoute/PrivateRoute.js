import React from 'react';
// import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="loader">
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;