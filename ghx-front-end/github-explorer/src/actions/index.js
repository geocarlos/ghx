import {
  GET_USERS,
  GET_DETAILS,
  GET_REPOS,
  GET_USERS_FAILED,
  GET_DETAIL_FAILED,
  GET_REPOS_FAILED
} from './types';

export function getUsers(users){
  return {
    type: GET_USERS,
    payload: users
  }
}

export function getUserDetails(user){
  return {
    type: GET_DETAILS,
    payload: user
  }
}

export function getUserRepos(repos){
  return {
    type: GET_REPOS,
    payload: repos
  }
}

/**
  Thunk actions */
export function fetchUsers(url){
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(getUsers(data)))
    .catch(()=> dispatch({type: GET_USERS_FAILED, payload: 'Error fetching users.'}))
  }
}

export function fetchUserDetails(url){
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(getUsers(data)))
    .catch(()=> dispatch({type: GET_DETAILS, payload: 'Error fetching user\'s detail.'}))
  }
}

export function fetchRepos(url){
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(getUsers(data)))
    .catch(()=> dispatch({type: GET_REPOS_FAILED,  payload: 'Error fetching user\'s repos.'}))
  }
}
