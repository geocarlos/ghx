import React, { Component } from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
import {getUserDetails, getUserRepos} from '../actions';

class Users extends Component {

  setUser(user){
    this.props.dispatch(getUserDetails(user))
  }

  render(){
    const username = 'geocarlos';
    return (
      <div>
        <h1>User List</h1>
        <UserList
          users={this.props.users.users}
          user={this.props.user}
          setUser={(user)=> this.setUser(user)}/>
      </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    users: users
  }
}

export default connect(mapStateToProps)(Users);
