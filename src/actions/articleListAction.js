import {
  FETCH_ARTICLE_LIST,
  FETCH_ARTICLE_LIST_SUCCEEDED,
  FETCH_ARTICLE_LIST_FAILED,
} from './actionTypes';

export const fetchArticleListAction = (listTypeId, selectedIndex) => {
  return {
    type: FETCH_ARTICLE_LIST,
    listTypeId,
    selectedIndex
  }
}

export const fetchSucceededAction = (receivedArticles) => {
  return {
    type: FETCH_ARTICLE_LIST_SUCCEEDED,
    receivedArticles
  }
}

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_ARTICLE_LIST_FAILED,
    error
  }
}
