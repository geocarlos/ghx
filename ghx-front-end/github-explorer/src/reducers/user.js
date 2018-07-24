import {GET_DETAILS, GET_DETAIL_FAILED} from '../actions/types';

const initialState = {
  user: {},
  error: ''
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case GET_DETAILS:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case GET_DETAIL_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
