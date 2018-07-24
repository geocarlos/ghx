import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Users from './Users';
import UserDetails from '../components/UserDetails';
import logo from '../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchUsers('/api/users?since=0'));
  }

  render() {

    return (
      <div className="App">
        <Route exact path='/' render={()=>(
          <Users />
        )} />
        <Route path='/:username' render={()=>(
          <UserDetails user={this.props.user.user} />
        )} />
      </div>
    );
  }
}

function mapStateToProps({user}){
  return {
    user: user
  }
}

export default connect()(App);
