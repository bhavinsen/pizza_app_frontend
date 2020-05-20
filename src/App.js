import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import CartPage from './containers/Cart';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';
import SuccessPage from './containers/Success';
import Header from './components/Header';

import authService from './services/auth.service';

const App = () => (
   <BrowserRouter>
       <div className="App">
           <Header user={authService.getCurrentUser()} />

           <Switch>
               <Route exact path="/">
                 <HomePage />
                </Route>
               <Route exact path="/cart">
                 <CartPage />
               </Route>
               <Route exact path="/login">
                  <LoginPage />
               </Route>
               <Route exact path="/register">
                  <RegisterPage />
               </Route>
               <Route exact path="/success" component={SuccessPage} />
           </Switch>
       </div>
   </BrowserRouter>
);
export default App;