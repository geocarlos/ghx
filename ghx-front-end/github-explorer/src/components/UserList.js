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
          <div className='user-list-item'>
            <h3>{user.id} - {user.login}</h3>
            <Link to={`${user.login}`}>View Details</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
