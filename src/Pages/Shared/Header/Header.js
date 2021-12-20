import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar className="navigation" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <h5 className='website_name'><i>ella<span className='ellamart'>mart+</span></i></h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <div className="navmenu">
                                <NavLink to="/home" activeClassName="selected">
                                    HOME
                                </NavLink>
                                <NavLink to="/about" activeClassName="selected">
                                    ABOUT-US
                                </NavLink>
                                <NavLink to="/allProducts" activeClassName="selected">
                                    All-Products
                                </NavLink>
                                {
                                    user.email &&
                                    <NavLink to="/Dashboard" activeClassName="selected">
                                        Dashboard
                                    </NavLink>}

                                {/* className="btn btn-sm btn-danger me-2" */}
                                {/* btn btn-sm btn-danger" */}

                                <>
                                    {user?.email ? <button onClick={logOut} className="btn btn-sm btn-danger me-2">
                                        Sign Out
                                    </button> : <Link to='/login'>
                                        <button className="btn btn-sm btn-danger">
                                            Sign In
                                        </button>
                                    </Link>}
                                    {user?.email ? <small className="displayName" style={{ color: "white", fontSize: "17px", fontWeight: "bold", marginLeft: "7px" }}>{user?.displayName}</small> : ""}
                                </>



                            </div>





                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;