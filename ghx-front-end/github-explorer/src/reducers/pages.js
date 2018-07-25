import {TRACK_PAGES, GO_BACK_PAGES} from '../actions/types';

const initialState = {
  pages: []
}

export const pages = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_PAGES:
      return {
        ...state,
        pages: [
          ...state.pages,
          action.payload
        ]
      }
    case GO_BACK_PAGES:
      const newState = state;
      newState.pages.pop();
      return newState;
    default:
      return state;
  }
}
