import {
  getUsers,
  getUserDetails,
  getUserRepos,
  fetchUsers,
  fetchUserDetails,
  fetchRepos,
  trackPages,
  goBackPages
} from './index';

import {
  GET_USERS,
  GET_DETAILS,
  GET_REPOS,
  GET_USERS_FAILED,
  GET_DETAIL_FAILED,
  GET_REPOS_FAILED,
  TRACK_PAGES,
  GO_BACK_PAGES
} from './types';

describe('basic actions', ()=>{
  it('should return type GET_USERS and an array as payload', ()=>{
    expect(getUsers([])).toEqual({type: GET_USERS, payload: []});
  });

  it('should return type GET_REPOS and an array as payload', ()=>{
    expect(getUserRepos([])).toEqual({type: GET_REPOS, payload: []});
  });

  it('should return type GET_DETAILS and an object as payload', ()=>{
    expect(getUserDetails({name: 'john'})).toEqual({type: GET_DETAILS, payload: {name: 'john'}});
  });

  it('should return a page number', ()=>{
    expect(trackPages(3)).toEqual({type: TRACK_PAGES, payload: 3});
  });

  it('should return a page number', ()=>{
    expect(goBackPages([])).toEqual({type: GO_BACK_PAGES});
  });
})
