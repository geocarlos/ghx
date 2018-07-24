import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails';
import logo from '../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className='heading'>
          <h2><img src={logo} alt='Logo' />GitHub Explorer</h2>
          <p>List of users and repositories</p>
        </div>


        <Route exact path='/' render={()=>(
          <Users />)}
        />

        <Route exact path='/users/:since' render={({match})=>(
          <Users sinceParam={match.params.since} />
        )} />
        <Route path='/user/:username' render={({match})=>(
          <UserDetails username={match.params.username} />
        )} />
      </div>
    );
  }
}

export default connect()(App);
