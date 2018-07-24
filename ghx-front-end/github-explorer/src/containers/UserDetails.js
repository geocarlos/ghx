import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserDetails, getUserDetails, fetchRepos} from '../actions';
import './UserDetails.css';
import Repos from '../components/Repos';

class UserDetails extends Component {

  componentDidMount(){
    let user = this.props.users.users.filter(u => u.login === this.props.username)[0];
    if(user){
      this.props.dispatch(getUserDetails(user));
    } else{
      this.props.dispatch(fetchUserDetails(`/api/users/${this.props.username}/details`))
    }
    this.props.dispatch(fetchRepos(`/api/users/${this.props.username}/repos`))
  }

  render(){
    const user = this.props.user.user;
    const repos = this.props.repos.repos;
    return (
      <div className='user-details'>
        <h2>{user.id} - {user.login}</h2>
        <div className='row'>
          <div className='col-md'>
            <a href={user.html_url || ''}>View Profile on GitHub</a>
          </div>
          <div>
            <p>Created at {user.created_at}</p>
            <Link className='link' to='/'>Back to User List</Link>
          </div>
        </div>
        <div>
          <hr></hr>
          <h3>{user.login}'s Public Repos</h3>
          <div>
            <Repos repos={repos} />
          </div>
        </div>

    </div>)
  }
}

function mapStateToProps({user, users, repos}){
  return {
    user,
    users,
    repos
  }
}

export default connect(mapStateToProps)(UserDetails);
