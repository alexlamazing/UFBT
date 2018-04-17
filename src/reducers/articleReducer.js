import {
  FETCH_ARTICLES
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case FETCH_ARTICLES:{
      return action.payload;
    }
    default:
      return state;
  }
};
