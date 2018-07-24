import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserDetails, getUserDetails, fetchRepos} from '../actions';

class UserDetails extends Component {

  componentDidMount(){
    let user = this.props.users.users.filter(u => u.login === this.props.username)[0];
    if(user){
      this.props.dispatch(getUserDetails(user));
    } else{
      this.props.dispatch(fetchUserDetails(`/api/users/${this.props.username}/details`))
    }
  }

  render(){
    const user = this.props.user.user;
    return (<div>
      <h2>{user.id} - {user.login}</h2>
      <Link className='link' to='/'>User List</Link>
    </div>)
  }
}

function mapStateToProps({user, users}){
  return {
    user,
    users
  }
}

export default connect(mapStateToProps)(UserDetails);

/* Id, Login, Profile URL and the date of the login creation */
