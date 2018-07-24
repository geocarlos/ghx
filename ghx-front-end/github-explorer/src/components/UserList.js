import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = ({ users, user, setUser }) => {
  return (
    <ul>
      {users.map(user =>(
        <li key={user.id}>
          <div className='user-list-item'>
            <h3>{user.id} - {user.login}</h3>
            <Link to={`${user.login}`} onClick={(user)=>setUser(user)}>View Details</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
