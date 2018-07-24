import React from 'react';
import {Link} from 'react-router-dom';

const UserDetails = ({user}) => {
  return (<div>
    <h2>{user.id} - {user.login}</h2>
    <Link className='link' to='/'>User List</Link>
  </div>)
}

export default UserDetails;

/* Id, Login, Profile URL and the date of the login creation */
