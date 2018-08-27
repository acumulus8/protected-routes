import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import './App.css';

import Protected from './routes/Protected';
import Public from './routes/Public';
import Login from './routes/Login';
import PrivateRoute from './routes/PrivateRoute';
import TestRoute from './routes/TestRoute';
import AuthButton from './components/AuthButton';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to='/public'>Public Page</Link></li>
            <li><Link to='/protected'>Protected Page</Link></li>
            <li><Link to='/testRoute'>Test Page</Link></li>
          </ul>
          <Route path='/public' component={Public} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/protected' component={Protected} />
          <PrivateRoute path='/testRoute' component={TestRoute} />
        </div>
      </Router>
    );
  }
}

export default App;
