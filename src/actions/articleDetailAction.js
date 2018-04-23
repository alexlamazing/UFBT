import {
    FETCH_ARTICLE_DETAIL,
    FETCH_ARTICLE_DETAIL_SUCCEEDED,
    FETCH_ARTICLE_DETAIL_FAILED,
    CLEAR_ARTICLE_DETAIL,
} from './actionTypes';

export const fetchArticleDetailAction = (urlString) => {
  return {
    type: FETCH_ARTICLE_DETAIL,
    urlString,
  }
}

export const fetchArticleDetailSucceededAction = (receivedDetail) => {
  return {
    type: FETCH_ARTICLE_DETAIL_SUCCEEDED,
    receivedDetail,
  }
}

export const fetchArticleDetailFailedAction = (error) => {
  return {
    type: FETCH_ARTICLE_DETAIL_FAILED,
    error,
  }
}

export const clearArticleDetailAction = () => {
  return {
    type: CLEAR_ARTICLE_DETAIL,
  }
}
