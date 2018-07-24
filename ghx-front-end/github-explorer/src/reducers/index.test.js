import {users} from './users';
import {user} from './user';
import {repos} from './repos';
import {
  GET_USERS,
  GET_DETAILS,
  GET_REPOS,
  GET_USERS_FAILED,
  GET_DETAIL_FAILED,
  GET_REPOS_FAILED
} from '../actions/types';

describe('fetch users', ()=>{
  it('should return the initial state', () =>{
    expect(users(undefined, {})).toEqual({users: [], error: ''});
  })

  it('should return state with a new object', () =>{
    expect(user(undefined, {})).toEqual({user: {}, error: ''});
  })

  it('should return state with a new object', () =>{
    expect(user(undefined, {type: GET_DETAILS, payload: {name: 'john'}})).toEqual({user: {name: 'john'}, error: ''});
  })

  it('should return state with an empty array of repos', () =>{
    expect(repos(undefined, {})).toEqual({repos: [], error: ''});
  })

})
