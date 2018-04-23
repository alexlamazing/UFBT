import {
  FETCH_ARTICLE_DETAIL,
  FETCH_ARTICLE_DETAIL_SUCCEEDED,
  FETCH_ARTICLE_DETAIL_FAILED,
} from '../actions/actionTypes';

import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchArticleDetail(action) {
  try {
    const receivedDetail = yield call(Api.getDetailFromUrl, action.urlString);
    //console.log('receivedDetail ' + receivedDetail);
    yield put({
      type: FETCH_ARTICLE_DETAIL_SUCCEEDED,
      receivedDetail,
    });
  } catch(error) {
    console.log(error);
    yield put({
      type:FETCH_ARTICLE_DETAIL_FAILED,
      error
    });
  }
}

export function* watchFetchArticleDetail() {
  yield takeEvery(FETCH_ARTICLE_DETAIL, fetchArticleDetail);
}
