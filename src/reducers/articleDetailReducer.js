import {
  CLEAR_ARTICLE_DETAIL,
  FETCH_ARTICLE_DETAIL_SUCCEEDED,
  FETCH_ARTICLE_DETAIL_FAILED,
} from '../actions/actionTypes';

const articleDetailReducer = (detail = '', action) => {
  switch (action.type) {
    case CLEAR_ARTICLE_DETAIL:
      return '';
    case FETCH_ARTICLE_DETAIL_SUCCEEDED:
      return action.receivedDetail;
    case FETCH_ARTICLE_DETAIL_FAILED:
      return detail;
    default:
      return detail;
  }
}

export default articleDetailReducer;
