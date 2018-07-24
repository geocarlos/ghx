import React, { Component } from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class Users extends Component {

  getUsers(sinceParam){
    this.props.dispatch(fetchUsers(`/api/users?since=${sinceParam}`));
  }

  componentDidMount(){
    let sinceParam = 0
    if(this.props.sinceParam){
      sinceParam = this.props.sinceParam;
    }
    this.getUsers(sinceParam);
  }

  render(){
    const users = this.props.users.users;
    return (
      <div>
        <h1>User List</h1>
        <button>Previous</button>
        <button onClick={()=>this.getUsers(users.length)}>Next</button>
        <UserList
          users={users}/>
        <button>Previous</button>
        <button>Next</button>
      </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    users
  }
}

export default connect(mapStateToProps)(Users);
