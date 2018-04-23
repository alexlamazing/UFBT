import { FETCH_ARTICLE_LIST, FETCH_ARTICLE_LIST_SUCCEEDED, FETCH_ARTICLE_LIST_FAILED } from '../actions/actionTypes';
import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchArticleList(action) {
  try {
    const receivedArticles = yield call(Api.getArticlesFromApi, action.listTypeId, action.selectedIndex);
    yield put({
      type: FETCH_ARTICLE_LIST_SUCCEEDED,
      receivedArticles,
      listTypeId: action.listTypeId
    });
  } catch(error) {
    yield put({
      type: FETCH_ARTICLE_LIST_FAILED,
      error
    });
  }
}

export function* watchFetchArticleList() {
  yield takeEvery(FETCH_ARTICLE_LIST, fetchArticleList);
}
