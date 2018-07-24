import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = ({ users }) => {

  if(!Array.isArray(users)){
    return (
      <div>
        <h2> There was an error fetching users.</h2>
      </div>
    )
  }

  return (
    <ul>
      {users.map(user =>(
        <li key={user.id}>
          <div className='user-list-item row'>
            <div className='col-md'><h3>{user.id} - {user.login}</h3></div>
            <div className='col-md'><Link to={`/user/${user.login}`}>View Details</Link></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
