import {GET_REPOS, GET_REPOS_FAILED} from '../actions/types';

const initialState = {
  repos: [],
  error: ''
}

export const repos = (state=initialState, action) => {
  switch(action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        error: ''
      }
    case GET_REPOS_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
