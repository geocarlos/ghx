import React from 'react';
import { Link } from 'react-router-dom';

const Repos = ({ repos }) => {

  if(!Array.isArray(repos)){
    return (
      <div>
        <h2> There was an error fetching repos.</h2>
      </div>
    )
  }

  return (
    <ul>
      {repos.map(repo =>(
        <li key={repo.id}>
          <div className='repo-list-item row'>
            <div className='col-md'>{repo.id}</div>
            <div className='col-md'>{repo.name}</div>
            <div className='col-md'><a href={repo.html_url}>Vew On GitHub</a></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Repos;
