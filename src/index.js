import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Naoencontrada from './pages/naoencontrada';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const routing = (
  <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route component={Naoencontrada} />
      </Switch>
  </Router>
) 

ReactDOM.render(
  routing,
  document.getElementById('root')
);


reportWebVitals();

