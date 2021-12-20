import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth'
// import UserOrder from '../../UserDashBoard/User/UserOrder/UserOrder';
import DashBoardHome from '../DashBoardHome/DashBoardHome'

import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import './DashBoard.css'
import { Button } from '@mui/material';
import MakeAdmin from '../../AdminDashBoard/Admin/MakeAdmin/MakeAdmin';
import UserOrder from '../../UserDashBoard/User/UserOrder/UserOrder'
import AddProducts from '../../AdminDashBoard/Admin/AddProducts/AddProducts'
import PayNow from '../../UserDashBoard/User/PayNow/PayNow'
import UserReview from '../../UserDashBoard/User/UserReview/UserReview';
import ManageAllOrders from '../../AdminDashBoard/Admin/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from '../../AdminDashBoard/Admin/ManageAllProducts/ManageAllProducts';

const drawerWidth = 220;

function DashBoard(props) {
    const { user, admin, logOut } = useAuth();
    const { window } = props;

    let { path, url } = useRouteMatch();


    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <div className='bg-light text-dark fs-5'>

                {/* User & Admin Show That */}
                <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to='/'><Button className=' fw-bolder text-primary' color="inherit" ><i className="fas fa-house-user fs-5"></i>&nbsp;Home</Button></Link>
                <Divider />

                {/* User Router LINK */}
                {!admin && <Box>
                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/pay`}><Button className='fw-bolder text-primary' color="inherit" sx={{ color: 'InfoText' }}><i className="far fa-credit-card"></i>&nbsp; Pay</Button></Link>
                    <Divider />

                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/userOrder`}><Button className=' fw-bolder text-primary' color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-shopping-cart"></i>&nbsp; My Order</Button></Link>
                    <Divider />


                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/review`}><Button className=' fw-bolder text-primary' color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-edit fs-6"></i>&nbsp; Review</Button></Link>
                    <Divider />
                </Box>}


                {/* All Admin Route */}
                {admin && <Box>
                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/allOrders`} ><Button className=' fw-bolder' color="inherit" style={{ color: 'blue' }}><i className="fab fa-product-hunt "></i>&nbsp; Manage All Orders</Button></Link>
                    <Divider />

                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/makeAdmin`} ><Button color="inherit" style={{ color: 'blue' }} className=' fw-bolder' ><i className="fas fa-users-cog"></i>&nbsp; Make Admin</Button></Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/addProduct`} ><Button style={{ color: 'blue' }} className=' fw-bolder' color="inherit" sx={{ color: 'InfoText' }}><i className="far fa-plus-square"></i>&nbsp; Add Products</Button></Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', textAlign: 'center', display: 'block', color: 'black' }} to={`${url}/manageProducts`} ><Button color="inherit" style={{ color: 'blue' }} className=' fw-bolder'><i className="far fa-plus-square"></i>&nbsp; Manage Products</Button></Link>
                    <Divider />
                </Box>
                }

                <Divider />
                <Divider />

                {/* User And Admin Show Thaat */}
                <Button onClick={logOut} color="inherit" sx={{ color: 'InfoText' }}><i className="fas fa-sign-out-alt"></i>&nbsp; Log-Out</Button>
                <Divider />

            </div>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>


            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {
                                user.email &&
                                <h5 className='text-info'>User Dashboard</h5>
                            }
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    <Switch>
                        <Route exact path={path}>

                            <DashBoardHome></DashBoardHome>

                        </Route>


                        {!admin &&
                            <>
                                <Route path={`${path}/userOrder`}>
                                    <UserOrder></UserOrder>
                                </Route>

                                <Route path={`${path}/pay`}>
                                    <PayNow></PayNow>
                                </Route>

                                <Route path={`${path}/review`}>
                                    <UserReview></UserReview>
                                </Route>
                            </>}


                        {admin &&
                            <>
                                <Route path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>

                                <Route path={`${path}/addProduct`}>
                                    <AddProducts></AddProducts>
                                </Route>

                                <Route path={`${path}/allOrders`}>
                                    <ManageAllOrders></ManageAllOrders>
                                </Route>

                                <Route path={`${path}/manageProducts`}>
                                    <ManageAllProducts></ManageAllProducts>
                                </Route>
                            </>}

                    </Switch>


                </Box>
            </Box>




        </>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
