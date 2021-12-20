import React, { useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useHistory, } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './Register.css'

const Register = () => {

    const [loginData, setLoginData] = useState({});

    // 
    const history = useHistory();


    const { registerUser, isLoading, error, user } = useAuth();

    console.log(user)

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...loginData };
        newRegisterData[field] = value;
        setLoginData(newRegisterData);
        console.log(newRegisterData);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your Password Not Match')
            return;
        }
        else {
            registerUser(loginData?.email, loginData?.password, loginData?.name, history,);
        }


    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Row
                    style={{ paddingTop: "25px" }}
                    className="d-flex align-items-center"
                >
                    <Col xs={12} md={12} lg={6}>
                        <div className="text-center">

                        </div>

                        <div className="form">

                            {error && <Alert variant="danger">{error}</Alert>}

                            {user.email &&
                                <Alert variant='success'>
                                    User Created Successfully —check it out!
                                </Alert>
                            }

                            <h4
                                style={{
                                    color: "#2980b9",
                                    textAlign: "center",
                                    marginBottom: "15px",
                                }}
                            >
                                Sign Up
                            </h4>


                            {!isLoading &&
                                <form
                                    onSubmit={handleRegisterSubmit}
                                    className="text-center" >
                                    <input
                                        onBlur={handleOnBlur}
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                    />
                                    <br />
                                    <br />
                                    <input
                                        onBlur={handleOnBlur}
                                        type="email" name="email" placeholder="Email" required />
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
                                    <input
                                        onBlur={handleOnBlur}
                                        type="password"
                                        name="password2"
                                        placeholder="Re-enter Password"
                                        required
                                    />
                                    <br />
                                    <br />
                                    <button type="submit" className="mt-2 securityBtn">
                                        Sign up
                                    </button>
                                    <Link
                                        to="/login"
                                        style={{
                                            display: "block",
                                            marginTop: "10px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Already have an account? Sign In
                                    </Link>
                                    <Link
                                        to="/home"
                                        style={{
                                            display: "block",
                                            marginTop: "10px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Cancel
                                    </Link>
                                </form>}
                            {
                                isLoading && <Spinner animation="grow" />
                            }


                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <img
                            style={{ width: "100%" }}
                            src="https://accounts.formaloo.net/static/assets/image/signup.svg"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;