import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import AuthProvider from './Context/AuthProvider/AuthProvider';
import About from './Pages/About/About';

import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import AllServiceDetails from './Pages/AllServiceDetails/AllServiceDetails/AllServiceDetails';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/UserLogin_SignUp/Login/Login';
import PrivateRoute from './Pages/UserLogin_SignUp/PrivateRoute/PrivateRoute';
import Register from './Pages/UserLogin_SignUp/Register/Register';


function App() {
  return (
    <div >
      <AuthProvider>

        <BrowserRouter>

          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/allProducts'>
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path='/topProductDetails/:id'>
              <AllServiceDetails></AllServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/bookingDetails/:id'>
              <AllServiceDetails></AllServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
