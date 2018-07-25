import {users} from './users';
import {user} from './user';
import {repos} from './repos';
import {pages} from './pages';
import {
  GET_USERS,
  GET_DETAILS,
  GET_REPOS,
  GET_USERS_FAILED,
  GET_DETAIL_FAILED,
  GET_REPOS_FAILED,
  TRACK_PAGES,
  GO_BACK_PAGES
} from '../actions/types';

describe('fetch users', ()=>{
  it('should return the initial state', () =>{
    expect(users(undefined, {})).toEqual({users: [], nextPageLink: '', error: ''});
  });

  it('should return state with a new object', () =>{
    expect(user(undefined, {})).toEqual({user: {}, error: ''});
  });

  it('should return state with a new object', () =>{
    expect(user(undefined, {type: GET_DETAILS, payload: {name: 'john'}})).toEqual({user: {name: 'john'}, error: ''});
  });

  it('should return state with an empty array of repos', () =>{
    expect(repos(undefined, {})).toEqual({repos: [], error: ''});
  });

  it('should return state with an empty array of pages', () =>{
    expect(pages(undefined, {})).toEqual({pages: []});
  })

  it('should return state with an empty array of pages', () =>{
    expect(pages({pages: [3]}, {type: TRACK_PAGES, payload: 4})).toEqual({pages: [3,4]});
  })

  it('should return state with an empty array of pages', () =>{
    expect(pages({pages: [1,2,3,4]}, {type: GO_BACK_PAGES})).toEqual({pages: [1,2,3]});
  })

})
