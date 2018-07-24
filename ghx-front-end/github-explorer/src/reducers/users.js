import {GET_USERS, GET_USERS_FAILED} from '../actions/types';

const initialState = {
  users: [],
  error: ''
}

export const users = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      // console.log(action.payload)
      return {
        ...state,
        users: action.payload,
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
