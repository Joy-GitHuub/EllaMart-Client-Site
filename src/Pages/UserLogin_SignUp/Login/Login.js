import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/icon/5098293.jpg'
import Header from '../../Shared/Header/Header';
import './Login.css'

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, loginUser, signInWithGoogle, isLoading, error } = useAuth();

    // 
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = (e) => {

        loginUser(loginData?.email, loginData?.password, location, history)
        e.preventDefault();
    };

    // 
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };

    return (
        <div className='login-section '>
            <Header></Header>
            <div className='row gx-0  '>
                <div className='col-lg-6 col-md-12 col-12'>
                    <div className="text-center">
                        {/* <img style={{ width: "150px" }} src={logo} alt="logo" /> */}
                    </div>
                    <div className="form-area">
                        {error && <Alert variant="danger">{error}</Alert>}

                        {user.email &&
                            <Alert variant='success'>
                                User Login Successfully —check it out!
                            </Alert>
                        }
                        <h4
                            style={{
                                color: "#000000",
                                textAlign: "center",
                                marginBottom: "25px",
                            }}
                        >
                            Sign In
                        </h4>
                        {!isLoading &&

                            <form onSubmit={handleLoginSubmit} className="text-center" >
                                <input
                                    onBlur={handleOnBlur}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                <br />
                                <br />
                                <input
                                    onBlur={handleOnBlur}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                <br />
                                <br />
                                <button type="submit" className="mt-2 securityBtn">
                                    Sign in
                                </button>
                                <Link
                                    to="/register"
                                    style={{
                                        display: "block",
                                        marginTop: "10px",
                                        textDecoration: "none",
                                        color: 'black',
                                        fontFamily: 'cursive',
                                        fontWeight: 700,

                                    }}
                                >
                                    Don't have account? Sign Up
                                </Link>
                                <Link
                                    to="/home"
                                    style={{
                                        display: "block",
                                        marginTop: "10px",
                                        textDecoration: "none",
                                        color: 'black',
                                        fontFamily: 'cursive',
                                        fontWeight: 700,
                                    }}
                                >
                                    Cancel
                                </Link>
                            </form>}

                        {
                            isLoading && <Spinner animation="grow" />
                        }
                    </div>
                    <br />
                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className="g-btn">
                            <i className="fab fa-google"></i> Sign In With Google
                        </button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-12'>
                    <div className=''>
                        <img height={'550px'} className='w-100 ' src={logo} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;