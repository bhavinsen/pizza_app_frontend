import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import CartPage from './containers/Cart';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';

import Header from './components/Header';

const App = () => (
   <BrowserRouter>
       <div className="App">
           <Header />

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
           </Switch>
       </div>
   </BrowserRouter>
);
export default App;