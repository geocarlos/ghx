import {GET_USERS, GET_USERS_FAILED} from '../actions/types';

const initialState = {
  users: [],
  nextPageLink: '',
  error: ''
}

export const users = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users,
        nextPageLink: action.payload.nextPageLink,
        error: ''
      }
    case GET_USERS_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
